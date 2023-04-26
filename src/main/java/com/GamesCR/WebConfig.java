package com.GamesCR;

import java.util.Locale;
import javax.servlet.http.HttpServletRequest;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Bean
    public SessionLocaleResolver localeResolver() {
        var slr = new SessionLocaleResolver();
        slr.setDefaultLocale(new Locale("es"));
        return slr;
    }

    @Bean
    public LocaleChangeInterceptor localeChangeInterceptor() {
        var lci = new LocaleChangeInterceptor();
        lci.setParamName("lang"); // Aquí debes usar el nombre de atributo que definiste en el SessionLocaleResolver
        return lci;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registro) {
        registro.addInterceptor(localeChangeInterceptor());
    }

    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource
                = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename("classpath:messages");
        messageSource.setDefaultEncoding("UTF-8");
        return messageSource;
    }

    /*controladores de error*/
    @Controller
    public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {

        @RequestMapping("/error")
        public String handleError(HttpServletRequest request) {
            // Obtener el código de estado de la solicitud
            Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");

            // Redirigir a la página de error correspondiente según el código de estado
            if (statusCode == 404) {
                return "error-404";
            } else if (statusCode == 500) {
                return "error-500";
            } else {
                return "error";
            }
        }

        public String getErrorPath() {
            return "/error";
        }
    }

    @Controller
    public class LanguageController {

        @RequestMapping("/language")
        public String changeLanguage(@RequestParam("lang") String language, HttpServletRequest request) {
            request.getSession().setAttribute(SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME, new Locale(language));
            return "redirect:/"; // redirecciona al inicio después de cambiar el idioma
        }
        
       
    /*public void addViewControllers(ViewControllerRegistry registro){
        registro.addViewController("/").setViewName("index");
        registro.addViewController("/login");
        registro.addViewController("/errores/403").setViewName("/errores/403");*/
    }
    }


    



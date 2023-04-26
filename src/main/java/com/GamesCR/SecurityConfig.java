/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.GamesCR;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{
        auth.inMemoryAuthentication()
                .withUser("admin")
                    .password("{noop}admin")
                    .roles("ADMIN","VENDEDOR","USER")
                .and()
                .withUser("rebeca")
                    .password("{noop}123")
                    .roles("VENDEDOR","USER")
                .and()
                .withUser("pedro")
                    .password("{noop}123")
                    .roles("USER");
    }
    
@Override
protected void configure(HttpSecurity http) throws Exception {
    http.authorizeRequests()
        .antMatchers("/producto").hasAnyRole("ADMIN")
        .antMatchers("/**").permitAll()
        .and()
        .formLogin()
        .and()
        .exceptionHandling()
        .accessDeniedPage("/accesodenegado.html");
    
  
}



}

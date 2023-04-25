package com.GamesCR.controller;

import com.GamesCR.entity.Categoria;
import com.GamesCR.entity.Producto;
import com.GamesCR.service.ICategoriaService;
import com.GamesCR.service.IProductoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class ProductoController {
    
    @Autowired
    private IProductoService productoService;
    
    @Autowired
    private ICategoriaService categoriaService;
    
     @GetMapping("/producto")  
    public String index(Model model) {
        List<Producto> listaProducto = productoService.getAllProducto();
        model.addAttribute("titulo", "Tabla Productos");
        model.addAttribute("productos", listaProducto);
        return "producto";
    }

    @GetMapping("/productoN")
    public String crearProducto(Model model) { 
        List<Categoria> listaCategorias = categoriaService.listCategory();
        model.addAttribute("producto", new Producto());
        model.addAttribute("categorias", listaCategorias);
        return "crear";
    }

    @GetMapping("/delete/{id}")
    public String eliminarProducto(@PathVariable("id") Long idProducto) {
        productoService.delete(idProducto);
        return "redirect:/producto";
    }

    @PostMapping("/save")
    public String guardarProducto(@ModelAttribute Producto producto) {
        productoService.saveProducto(producto);
        return "redirect:/producto";
    }

    @GetMapping("/editProducto/{id}")
    public String editarProducto(@PathVariable("id") Long idProducto, Model model) {
        Producto producto = productoService.getProductoById(idProducto);
        List<Categoria> listaCategorias = categoriaService.listCategory();
        model.addAttribute("producto", producto);
        model.addAttribute("categorias", listaCategorias);
        return "crear";
    }

    @GetMapping("/addProducto/{id}")
    public String agregarProducto(@PathVariable("id") Long idProducto, Model model) {
        Producto producto = productoService.getProductoById(idProducto);
        List<Categoria> listaCategorias = categoriaService.listCategory();
        model.addAttribute("producto", producto);
        model.addAttribute("categorias", listaCategorias);
        return "agregar";
    }
}

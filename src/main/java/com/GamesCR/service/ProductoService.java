package com.GamesCR.service;

import com.GamesCR.entity.Producto;
import com.GamesCR.repository.ProductoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductoService implements IProductoService{
    
    @Autowired ProductoRepository productoRepository;
    
    @Override
    public List<Producto> getAllProducto(){
        return (List<Producto>) productoRepository.findAll();
    }
    
    @Override
    public Producto getProductoById(long id) {
        return productoRepository.findById(id).orElse(null);
    }

    @Override
    public void saveProducto(Producto producto) {
        productoRepository.save(producto);
    }

    @Override
    public void delete(long id) {
        productoRepository.deleteById(id);
    }  
}

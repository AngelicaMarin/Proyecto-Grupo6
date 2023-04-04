package com.GamesCR.service;

import com.GamesCR.entity.Producto;
import java.util.List;

public interface IProductoService {
    public List<Producto> getAllProducto();
    public Producto getProductoById (long id);
    public void saveProducto(Producto producto);
    public void delete (long id);
}

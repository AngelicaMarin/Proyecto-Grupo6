package com.GamesCR.entity;


import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table (name="productos")
public class Producto implements Serializable{
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    
    private String producto;
    private String precio;
    private String descripcion;
    private String garantia;
    private String cant_disp;
    
    @ManyToOne
    @JoinColumn (name= "categorias_id")
    private Categoria categoria;
    
    public long getId(){
        return id;
    }
    
    public void setId(long id){
        this.id=id;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getGarantia() {
        return garantia;
    }

    public void setGarantia(String garantia) {
        this.garantia = garantia;
    }

    public String getCant_disp() {
        return cant_disp;
    }

    public void setCant_disp(String cant_disp) {
        this.cant_disp = cant_disp;
    }
    

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
    
}

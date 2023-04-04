package com.GamesCR.service;

import com.GamesCR.entity.Categoria;
import com.GamesCR.repository.CategoriaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService implements ICategoriaService{
    @Autowired
    private CategoriaRepository categoriaRepository;
    
    @Override
    public List<Categoria> listCategory(){
        return (List<Categoria>) categoriaRepository.findAll();
    }
}

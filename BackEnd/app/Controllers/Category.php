<?php

namespace App\Controllers;

use App\Models\CategoryModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Category extends ResourceController
{
    use ResponseTrait;

    protected $model;

    public function __construct()
    {
        $this->model = new CategoryModel();
    }

    public function index()
    {
        $data = $this->model->findAll();
        return $this->respond($data);
    }

    public function show($id = null)
    {
        // Fetch a specific attraction by ID
        $data = $this->model->findAll();

        if (!$data) {
            return $this->failNotFound('Katogori tidak ditemukan');
        }

        return $this->respond($data);
    }
}

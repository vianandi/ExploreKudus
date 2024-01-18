<?php

namespace App\Controllers;

use App\Models\FasilitasModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Fasilitas extends ResourceController
{
    use ResponseTrait;

    protected $model;

    public function __construct()
    {
        $this->model = new FasilitasModel();
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
            return $this->failNotFound('Fasilitas tidak ditemukan');
        }

        return $this->respond($data);
    }
}

<?php

namespace App\Controllers;

use App\Models\CommentModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Comment extends ResourceController
{
    use ResponseTrait;

    protected $model;

    public function __construct()
    {
        $this->model = new CommentModel();
    }

    public function index()
    {
        $data = $this->model->findAll();
        return $this->respond($data);
    }

    public function show($id = null)
    {
        // Fetch a specific attraction by ID
        $data = $this->model->find($id);

        if (!$data) {
            return $this->failNotFound('Komentar tidak ditemukan');
        }

        return $this->respond($data);
    }

    public function create()
    {
        // Validation code can be added here
        $data = [
            'comment' => $this->request->getVar('comment'),
            'id_pariwisata' => $this->request->getVar('id_pariwisata'),
            'tanggal' => $this->request->getVar('tanggal'),
            'name' => $this->request->getVar('name'),
            'email' => $this->request->getVar('email'),
        ];
        // Insert the data into the database
        $this->model->save($data);

        // // Respond with a success message
        $response = [
            'status' => 201, // HTTP 201 Created
            'error' => null,
            'messages' => [
                'success' => 'Komentar berhasil dikirim'
            ]
        ];
        return $this->respondCreated($response);
        
    }

    public function update($id = null)
    {
        // Fetch the contact data by ID
        $data = $this->model->find($id);

        if (!$data) {
            return $this->failNotFound('komentar tidak ditemukan');
        }

        // Get the new data from the request
        $newData = [
            'comment' => $this->request->getVar('comment'),
            'id_pariwisata' => $this->request->getVar('id_pariwisata'),
            'tanggal' => $this->request->getVar('tanggal'),
            'name' => $this->request->getVar('name'),
            'email' => $this->request->getVar('email'),
        ];

        // Update the contact in the database
        $this->model->update($id, $newData);

        // Respond with a success message
        $response = [
            'status' => 200, // HTTP 200 OK
            'error' => null,
            'messages' => [
                'success' => 'Komentar sukses diupdate'
            ]
        ];

        return $this->respond($response);
    }

    public function delete($id = null)
    {
        // Fetch the attraction data by ID
        $data = $this->model->find($id);

        if ($data) {
            // Delete the attraction from the database
            $this->model->delete($id);

            // Respond with a success message
            $response = [
                'status' => 200, // HTTP 200 OK
                'error' => null,
                'messages' => [
                    'success' => 'Komentar berhasil dihapus'
                ]
            ];

            return $this->respondDeleted($response);
        } else {
            // Respond with a not found error if attraction is not found
            return $this->failNotFound('Komentar tidak ditemukan');
        }
    }
}

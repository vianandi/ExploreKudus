<?php

namespace App\Controllers;

use App\Models\ContactModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Contact extends ResourceController
{
    use ResponseTrait;

    protected $model;

    public function __construct()
    {
        $this->model = new ContactModel();
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
            return $this->failNotFound('Pesan tidak ditemukan');
        }

        return $this->respond($data);
    }

    public function create()
    {
        // Validation code can be added here
        $data = [
            'username' => $this->request->getVar('username'),
            'email' => $this->request->getVar('email'),
            'telp' => $this->request->getVar('telp'),
            'pesan' => $this->request->getVar('pesan'),
        ];
        // Insert the data into the database
        $this->model->save($data);

        // Respond with a success message
        $response = [
            'status' => 201, // HTTP 201 Created
            'error' => null,
            'messages' => [
                'success' => 'pesan berhasil dikirim'
            ]
        ];
        return $this->respondCreated($response);
    }

    public function update($id = null)
    {
        // Fetch the contact data by ID
        $data = $this->model->find($id);

        if (!$data) {
            return $this->failNotFound('Contact not found');
        }

        // Get the new data from the request
        $newData = [
            'username' => $this->request->getVar('username'),
            'email' => $this->request->getVar('email'),
            'telp' => $this->request->getVar('telp'),
            'pesan' => $this->request->getVar('pesan'),
        ];

        // Update the contact in the database
        $this->model->update($id, $newData);

        // Respond with a success message
        $response = [
            'status' => 200, // HTTP 200 OK
            'error' => null,
            'messages' => [
                'success' => 'Contact updated successfully'
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
                    'success' => 'pesan berhasil dihapus'
                ]
            ];

            return $this->respondDeleted($response);
        } else {
            // Respond with a not found error if attraction is not found
            return $this->failNotFound('pesan tidak ditemukan');
        }
    }
}

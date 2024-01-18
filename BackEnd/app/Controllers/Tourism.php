<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\TourismModel;

class Tourism extends ResourceController
{
    use ResponseTrait;

    protected $model;

    public function __construct()
    {
        $this->model = new TourismModel();
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
            return $this->failNotFound('Attraction not found');
        }

        return $this->respond($data);
    }

    public function create()
    {
        // Validation code can be added here

        // Get the uploaded thumbnail
        $gambarUtama = $this->request->getFile('gambarUtama');
        $gambarPanjang = $this->request->getFile('gambarPanjang');

        if ($gambarUtama->isValid() && !$gambarUtama->hasMoved()) {
            // Generate a random name and move the thumbnail to the uploads directory
            $newName = $gambarUtama->getRandomName();
            $newName1 = $gambarPanjang->getRandomName();
            $gambarUtama->move('./uploads', $newName);
            $gambarPanjang->move('./uploads', $newName1);
            $data = [
                'name' => $this->request->getVar('name'),
                'alamat' => $this->request->getVar('alamat'),
                'deskripsi1' => $this->request->getVar('deskripsi1'),
                'deskripsi2' => $this->request->getVar('deskripsi2'),
                'deskripsi3' => $this->request->getVar('deskripsi3'),
                'facilities' => $this->request->getVar('fasilitas'), 
                'category_id' => $this->request->getVar('category_id'),
                'gambarUtama' => $newName,
                'gambarPanjang' => $newName1,
            ];
            // Insert the data into the database
            $this->model->save($data);

            // Respond with a success message
            $response = [
                'status' => 201, // HTTP 201 Created
                'error' => null,
                'messages' => [
                    'success' => 'Attraction data inserted successfully'
                ]
            ];

            return $this->respondCreated($response);
        }else {
            // Respond with a validation error if thumbnail is not valid
            return $this->failValidationError($gambarUtama->getErrorString());
        }
    }
    
    public function update($id = null)
    {
        // Validation code can be added here

        // Get the uploaded thumbnail
        $gambarUtama = $this->request->getFile('gambarUtama');

        // Check if a file has been uploaded
        if ($gambarUtama->isValid() && !$gambarUtama->hasMoved()) {
            // Generate a random name and move the thumbnail to the uploads directory
            $newName = $gambarUtama->getRandomName();
            $gambarUtama->move('./uploads', $newName);

            // Prepare data for updating
            $data = [
                'name' => $this->request->getVar('name'),
                'alamat' => $this->request->getVar('alamat'),
                'deskripsi1' => $this->request->getVar('deskripsi1'),
                'deskripsi2' => $this->request->getVar('deskripsi2'),
                'deskripsi3' => $this->request->getVar('deskripsi3'),
                'facilities' => $this->request->getVar('fasilitas'), 
                'category' => $this->request->getVar('category'),
                'gambarUtama' => $this->request->getVar('gambarUtama'),
                'gambarPanjang' => $this->request->getVar('gambarPanjang'),
            ];

            // Update the data in the database
            $this->model->update($id, $data);

            // Respond with a success message
            $response = [
                'status' => 200, // HTTP 200 OK
                'error' => null,
                'messages' => [
                    'success' => 'Attraction data updated successfully'
                ]
            ];

            return $this->respond($response);
        } else {
            // Respond with a generic validation error message
            $response = [
                'status' => 400, // HTTP 400 Bad Request (or another appropriate error code)
                'error' => 'Validation error',
                'messages' => [
                    'error' => 'Please check your input.'
                ]
            ];

            return $this->respond($response);
        }
    }



    public function delete($id = null)
    {
        // Fetch the attraction data by ID
        $data = $this->model->find($id);

        if ($data) {
            // Get the filename of the thumbnail
            $gambarUtamaFilename = $data['gambarUtama'];
            $gambarPanjangFilename = $data['gambarPanjang'];

            // Delete the attraction from the database
            $this->model->delete($id);

            // Construct the path to the picture file
            $gambarUtamaPath = FCPATH . 'uploads/' . $gambarUtamaFilename;
            $gambarPanjangPath = FCPATH . 'uploads/' . $gambarPanjangFilename;

            // Check if the file exists and delete it
            if (file_exists($gambarUtamaPath) && is_file($gambarUtamaPath)) {
                unlink($gambarUtamaPath);
            }
            if (file_exists($gambarPanjangPath) && is_file($gambarPanjangPath)) {
                unlink($gambarPanjangPath);
            }

            // Respond with a success message
            $response = [
                'status' => 200, // HTTP 200 OK
                'error' => null,
                'messages' => [
                    'success' => 'Attraction data deleted successfully'
                ]
            ];

            return $this->respondDeleted($response);
        } else {
            // Respond with a not found error if attraction is not found
            return $this->failNotFound('Attraction not found');
        }
    }
}
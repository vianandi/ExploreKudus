<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\AdminModel;

class AdminController extends BaseController
{
    use ResponseTrait;

    public function login()
    {
        $request = $this->request->getJSON(true);
        $adminModel = new AdminModel();

        $email = $request['email'];
        $password = $request['password'];

        try {
            $admin = $adminModel->where('email', $email)->first();

            if ($admin) {
                if (password_needs_rehash($admin['password'], PASSWORD_DEFAULT)) {
                    // The stored password is not a hash, so we hash it
                    $hashedPassword = password_hash($admin['password'], PASSWORD_DEFAULT);
                    $adminModel->update($admin['id'], ['password' => $hashedPassword]);
                }

                if (password_verify($password, $admin['password'])) {
                    return $this->respond(['message' => 'Login successful']);
                }
            }

            return $this->respond(['message' => 'Invalid credentials'], 401);
        } catch (\Exception $e) {
            log_message('error', 'Login error: ' . $e->getMessage());
            return $this->respond(['message' => 'An unexpected error occurred'], 500);
        }
    }
}

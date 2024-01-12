<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->post('/api/admin/login', 'AdminController::login');
$routes->post('/api/tourism','Tourism::create');
$routes->get('/api/tourism','Tourism::index');
$routes->get('/api/tourism/(:num)','Tourism::show/$1');
$routes->delete('/api/tourism/(:num)','Tourism::delete/$1');
$routes->get('/api/get-image-url/(:segment)', 'ImageController::getImageUrl/$1');
<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->post('/api/admin/login', 'AdminController::login');
$routes->post('/api/tourism', 'Tourism::create');
$routes->get('/api/tourism', 'Tourism::index');
$routes->get('/api/tourism/(:num)', 'Tourism::show/$1');
$routes->delete('/api/tourism/(:num)', 'Tourism::delete/$1');
$routes->get('/api/get-image-url/(:segment)', 'ImageController::getImageUrl/$1');
//Contact
$routes->post('/api/contact', 'Contact::create');
$routes->get('/api/contact', 'Contact::index');
$routes->get('/api/contact/(:num)', 'Contact::show/$1');
$routes->put('/api/contact/(:num)', 'Contact::update/$1');
$routes->delete('/api/contact/(:num)', 'Contact::delete/$1');
//Comment
$routes->post('/api/comment', 'Comment::create');
$routes->get('/api/comment', 'Comment::index');
$routes->get('/api/comment/(:num)', 'Comment::show/$1');
$routes->put('/api/comment/(:num)', 'Comment::update/$1');
$routes->delete('/api/comment/(:num)', 'Comment::delete/$1');
//Fasilitas
// $routes->get('/api/fasilitas', 'Fasilitas::index');
$routes->get('/api/fasilitas', 'Fasilitas::show');

<?php

function get_tim_logo()
{
    $logo = get_custom_logo();
    if ($logo == null) {
        return new WP_Error('no_author', 'Invalid author', array('status' => 404));
    }
    return rest_ensure_response(get_src_from_dom_element($logo));
}

function get_cours_par_session()
{
    $cours = get_field('cours');
    if ($cours == null) {
        return new WP_Error('no_author', 'Invalid author', array('status' => 404));
    }
    return rest_ensure_response($cours);
}

function get_site_title()
{
    $title = get_bloginfo('name');
    if ($title == null) {
        return new WP_Error('no_author', 'Invalid author', array('status' => 404));
    }
    return rest_ensure_response($title);
}

function tim_register_rest_routes()
{
    register_rest_route('tim/v1', '/settings/logo', [
        'methods'  => WP_REST_Server::READABLE,
        'callback' => 'get_tim_logo',
    ]);
    register_rest_route('tim/v1', '/settings/title', [
        'methods'  => WP_REST_Server::READABLE,
        'callback' => 'get_site_title',
    ]);
    register_rest_route('tim/v1', '/acf/cours', [
        'methods'  => WP_REST_Server::READABLE,
        'callback' => 'get_cours_par_session',
    ]);
}
add_action('rest_api_init', 'tim_register_rest_routes');

function get_src_from_dom_element($domElement)
{
    $doc = new DOMDocument();
    $doc->loadHTML($domElement);
    $xpath = new DOMXPath($doc);
    $src = $xpath->evaluate("string(//img/@src)"); # "/images/image.jpg"
    return $src;
}

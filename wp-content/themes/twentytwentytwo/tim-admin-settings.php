<?php
function my_admin_menu()
{
    add_menu_page(
        __('Page Title - Honar Systems', 'my-textdomain'),
        __('TIM Admin', 'my-textdomain'),
        'manage_options',
        'sample-page',
        'my_admin_page_contents',
        'dashicons-schedule',
        3
    );

    add_submenu_page(
        'sample-page',
        __('Page Title - Honar Systems', 'my-textdomain'),
        __('Contacts', 'my-textdomain'),
        'manage_options',
        'sample-page-sub-menu',
        'my_sub_menu_admin_page_contents'
    );
}

add_action('admin_menu', 'my_admin_menu');

function my_admin_page_contents()
{
?>
    <h1>
        <?php esc_html_e('Les settings Custom du TIM', 'my-plugin-textdomain'); ?>
    </h1>
<?php
}

function my_sub_menu_admin_page_contents()
{
?>
    <h1>
        <?php esc_html_e('Réseaux sociaux et autres liens de contacts.', 'my-plugin-textdomain'); ?>
    </h1>
<?php
}

function load_custom_wp_admin_style($hook)
{
    wp_enqueue_style('custom_wp_admin_css', get_template_directory_uri() . '/assets/style.css');
    // Load color picker styles.
    wp_enqueue_style('wp-color-picker');

    wp_enqueue_script('custom_wp_admin_js', get_template_directory_uri() . '/assets/script.js');
}

add_action('admin_enqueue_scripts', 'load_custom_wp_admin_style');

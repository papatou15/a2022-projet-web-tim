<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db-projet-web-5w5' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '1WJ{.XPCL.m7wF[~LC^g|//G23VlHTOC}ZX}m)}Zxu95ZxNZ@we2<0t)F0f&>?Uw' );
define( 'SECURE_AUTH_KEY',  '2==SbqE23km?/a6A3FTea3zL[Pg;/(zP&mzi3zL!,EEtn~z+B*^&Ar.#ZOr_a~mF' );
define( 'LOGGED_IN_KEY',    'H6_uz{*>Rv<L+J;hGS[~GEm}eCQ0/Fhm2V67#VJ~o-lpyM_vL9]X+iIJjoHT;cyl' );
define( 'NONCE_KEY',        '-UM{@8=X^pI:ABz;V%VyfVd;KsGP5ac-_6Q98+Bmncq&I)6G2}W}9q&[=@5VJC><' );
define( 'AUTH_SALT',        't?,RE/Dp%;U{3G,BX+E#tV(wP1o C(QTPh(s{4m0Z8n3*vLr!^|zpHT|X2;T111!' );
define( 'SECURE_AUTH_SALT', 'U|5ZcL]O LY,>-~K3]_8s6Qv %=?Vo`L.nK1BBndt_*R?bMe.16k}-^PelTan FI' );
define( 'LOGGED_IN_SALT',   'Cj0YfRmv4GS aV^K)SwH8`[5_N:[D+@/w`%9$iJ<$eFZQ/VReI&OO`2CNmSR-Fq:' );
define( 'NONCE_SALT',       ')6^gD#a`8wV<$_[uzLnur7O0h[^bzA=j-z}>BJqlw1GW]BwlH+IO=f0%_V]f8-^I' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

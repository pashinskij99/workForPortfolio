<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'childhood' );

/** MySQL database username */
define( 'DB_USER', 'child_admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'child_admin' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&UHhF3fa#bDVJdTR{HK2MIo&tvD2H516`ii#z`VPJI+pQrg;k9RLFaZ0*bYfP1dV' );
define( 'SECURE_AUTH_KEY',  '6>%&Gaje52 dei| [V4Jc/F-304B5F[r.jmhUc8}wHC]&vAZd=kaGgXp>aQb. SV' );
define( 'LOGGED_IN_KEY',    '6G;2Hh/Ss50AxVXsbE=*MzYA$Fmf%Gdk8iliew:%<S`LW].E36zIgqUa`Q/z3|Ap' );
define( 'NONCE_KEY',        'z<K]dbWEr:;[G2a4~RoI=;3U_Fja//G=Xr6y(2,#Qh]?D NIV8>~df(=tGqJ(E&j' );
define( 'AUTH_SALT',        '(8%&{KIcDcm[;`IsiXPb{2l;>dpJKKOgFI~gHXy-+TDPEZ?8-;s;C;u{c$F$#-_ ' );
define( 'SECURE_AUTH_SALT', 'p2w!;2MrX]/yqWiHyIElLON^X6UzW-h2vCPBEyJBVx|1;xysSZ5n$0>9q54ORk9<' );
define( 'LOGGED_IN_SALT',   'a{hC5^|IL/,`q5k!0ncaMRj*p$lZQnJ,!MUR7d#W}$S}[p=.6/Y-Pk(0V=.,:9>E' );
define( 'NONCE_SALT',       'aQ[vr=d[N%kPM:9yV926.b[M4QabPLx2z= GacfJ9>ok_z}veCbrJ|[;PNG,AHp`' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

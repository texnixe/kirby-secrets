# Panel 2 - Login automatically

This solution could be added to the config.php. Replace `YOURUSERNAME` and `YOURPASSWORD`. When visiting your domain and `/autologin` you will be logged in with no questions asked.

***Be aware that this could be a very dangerous feature and should not be used on a live environment***

```php
c::set('routes', array(
  array(
    'pattern' => 'autologin',
    'action'  => function() {
      $username = 'YOURUSERNAME';
      $password = 'YOURPASSWORD';
      
      // Prevent access on the production system
      if(url::host() !== 'localhost') return false;
      
      $user = site()->user($username);
      if($user and $user->login($password)) {
        go('panel'); // or use go(); to redirect to the frontpage
      } else {
        echo 'invalid username or password';
        return false;
      }
    }
  )
));
```

**Source:** https://forum.getkirby.com/t/bypass-login-for-localhost-environment/3015
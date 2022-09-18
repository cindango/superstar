<script>
import logo from './Logo.svg';
</script>

<img class="logo-desktop" src={logo} width="214" height="100" alt="Infima" />
<img class="logo-mobile" src={logo} width="107" height="50" alt="Infima" />

<style>
  .logo-desktop {
    display: none;
  }
  .logo-mobile {
    display: block;
  }
@media (min-width:820px) {
  .logo-desktop {
    display: block;
  }
  .logo-mobile {
    display: none;
  }
}
</style>

//Template de la gallerie

export default `
<div data-slider="slider1">
  <div class="slider fullsize">

    <!-- SLIDER (Grande Image) -->
    <div class="slides">
      <ul style="width: 500%">

      </ul>
    </div>


    <!-- MENU (Image sur le cote) -->
    <div class="menu">
      <div class="slider-menu">
        <h1>Titre</h1>
        <ul class="slides">
          
        </ul>
      </div>
    </div>


    <!-- NAVIGATION (Bouton d'action) -->
    <div class="navigation">
      <div>
        <ul class="navigation">
          <li class="previous">
            <a href="#"><i class="material-icons">fast_rewind</i></a>
          </li>
          <li class="stop active">
            <a href="#"><i class="material-icons">pause_circle_filled</i></a>
          </li>
          <li class="play">
            <a href="#"><i class="material-icons">play_circle_filled</i></a>
          </li>
          <li class="next">
            <a href="#"><i class="material-icons">fast_forward</i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`;

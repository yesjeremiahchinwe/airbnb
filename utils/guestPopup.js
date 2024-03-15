function guestPop() {
  return `
  <div class='popup-guests'>
  <div class="d-flex justify-content-between align-items-center  gap-3 py-4 border-bottom border-muted">
  <div>
    <h6 class="m-0 fs-6">Adults</h6>
    <small class="text-secondary fs-6">Ages 13 or above</small>
  </div>


  <div class="d-flex align-items-center gap-3">
    <button id='adultsMinusBtn' class="btn border-1 border rounded-pill" role="button">
      <i class="bi bi-dash fs-4"></i>
    </button>

    <div id='adultsCount'></div>

    <button id='adultsPlusBtn' class="btn border-1 border rounded-pill" role="button">
      <i class="bi bi-plus fs-4"></i>
    </button>
  </div>
</div>


  <div class="d-flex justify-content-between align-items-center  gap-2 py-4 border-bottom border-muted">
    <div>
      <h6 class="m-0 fs-6">Children</h6>
      <small class="text-secondary fs-6">Ages 2-12</small>
    </div>

    <div class="d-flex align-items-center gap-3">
      <button id='childrenMinusBtn' class="btn border-1 border rounded-pill" role="button">
        <i class="bi bi-dash fs-4"></i>
      </button>

      <div id='childrenCount'></div>

      <button id='childrenPlusBtn' class="btn border-1 border rounded-pill" role="button">
        <i class="bi bi-plus fs-4"></i>
      </button>
    </div>
  </div>

  <div class="d-flex justify-content-between align-items-center  gap-2 py-4 border-bottom border-muted">
    <div>
      <h6 class="m-0 fs-6">Infants</h6>
      <small class="text-secondary fs-6">Under 2</small>
    </div>

    <div class="d-flex align-items-center gap-3">
      <button id='infantsMinusBtn' class="btn border-1 border rounded-pill" role="button">
        <i class="bi bi-dash fs-4"></i>
      </button>

      <div id='infantsCount'></div>

      <button id='infantsPlusBtn' class="btn border-1 border rounded-pill" role="button">
        <i class="bi bi-plus fs-4"></i>
      </button>
    </div>
  </div>

  <div class="d-flex justify-content-between align-items-center  gap-2 py-4">
    <div>
      <h6 class="m-0 fs-6">Pets</h6>
      <small class="text-secondary fs-6 text-decoration-underline ">Bringing a service animal?</small>
    </div>

    <div class="d-flex align-items-center gap-3">
      <button id='petsMinusBtn' class="btn border-1 border rounded-pill" role="button">
        <i class="bi bi-dash fs-4"></i>
      </button>

      <div id='petsCount'></div>

      <button id='petsPlusBtn' class="btn border-1 border rounded-pill" role="button">
        <i class="bi bi-plus fs-4"></i>
      </button>
    </div>
  </div></div>`;
}

export default guestPop;

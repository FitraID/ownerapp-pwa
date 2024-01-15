<template>
  <b-modal id="AddNewBank">
    <template #modal-header="{ close }">
      <h5>Add bank account</h5>
      <b-button
        class="btn-close"
        data-dismiss="modal"
        aria-label="Close"
        @click="close()"
      >
      </b-button>
    </template>
    <template>
      <div class="modal-body">
        <form action="verify-step-6.html" class="identity-upload">
          <div class="row g-3">
            <div class="col-xl-12">
              <label class="form-label">Routing number </label>
              <input type="text" class="form-control" placeholder="25487" />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Account number </label>
              <input type="text" class="form-control" placeholder="36475" />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Fulll name </label>
              <input
                type="text"
                class="form-control"
                placeholder="Jannatul Maowa"
              />
            </div>
            <div class="col-xl-12">
              <img
                src="../../../assets/images/routing.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </form>
      </div>
    </template>
    <template #modal-footer="{ ok }">
      <b-button v-b-modal.Success variant="primary" @click="ok()">
        Confirm
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "AddNewBank",
};
</script>

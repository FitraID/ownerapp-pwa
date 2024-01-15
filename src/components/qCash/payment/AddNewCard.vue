<template>
  <b-modal id="AddNewCard">
    <template #modal-header="{ close }">
      <h5>Add card</h5>
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
        <form class="identity-upload">
          <div class="row g-3">
            <div class="col-xl-12">
              <label class="form-label">Name on card </label>
              <input
                type="text"
                class="form-control"
                placeholder="Jannatul Maowa"
              />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Card number </label>
              <input
                type="text"
                class="form-control"
                placeholder="5658 4258 6358 4756"
              />
            </div>
            <div class="col-xl-4">
              <label class="form-label">Expiration </label>
              <input type="text" class="form-control" placeholder="10/22" />
            </div>
            <div class="col-xl-4">
              <label class="form-label">CVC </label>
              <input type="text" class="form-control" placeholder="125" />
            </div>
            <div class="col-xl-4">
              <label class="form-label">Postal code </label>
              <input type="text" class="form-control" placeholder="2368" />
            </div>
          </div>
        </form>
      </div>
    </template>
    <template #modal-footer="{ ok }">
      <b-button v-b-modal.Success variant="primary" @click="ok()">
        Submit
      </b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "AddNewCard",
};
</script>

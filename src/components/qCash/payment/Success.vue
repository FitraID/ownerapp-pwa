<template>
  <b-modal id="Success" hide-footer>
    <template #modal-header="{ close }">
      <h5 class="modal-title">Success</h5>
      <b-button
        class="btn-close"
        data-dismiss="modal"
        aria-label="Close"
        @click="close()"
      >
      </b-button>
    </template>
    <template>
      <div class="auth-form">
        <form @submit.prevent="" class="identity-upload">
          <div class="identity-content">
            <span class="icon"><i class="icofont-check"></i></span>
            <p>Congratulation. Your bank added</p>
          </div>
        </form>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "Success",
};
</script>

<template>
  <setting-layout :title="'Privacy'" :activeSettingMenu="5">
    <div class="card-body">
      <div class="row">
        <div class="col-xl-12">
          <div class="card h-unset">
            <div class="card-header">
              <h4 class="card-title">Privacy options</h4>
            </div>
            <div class="card-body">
              <h5>Instant sends</h5>
              <p class="mb-1">
                Allow other users to see that you use Qash and send you crypto
                instantly
              </p>
              <div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" checked="" />
              </div>
            </div>
          </div>
          <div class="card h-unset">
            <div class="card-header">
              <h4 class="card-title">Your Qash account</h4>
            </div>
            <div class="card-body">
              <p>
                You have a number of rights over your personal data. For more
                detailed information on these choices, please read our full
                <a to="#">Privacy Policy</a> and our
                <a to="#">Cookie Policy</a>.
              </p>

              <hr class="dropdown-divider my-4" />

              <div class="privacy-content">
                <h5>Request Data</h5>
                <p>Request a copy of my personal data held by Qash.</p>
                <a to="#" class="btn btn-outline-primary">Request data</a>
              </div>

              <hr class="dropdown-divider my-4" />

              <div class="privacy-content">
                <h5>Request Deletion</h5>
                <p>Request deletion of some or all of my data</p>
                <a to="#" class="btn btn-outline-primary">Request deletion</a>
              </div>

              <hr class="dropdown-divider my-4" />

              <div class="privacy-content">
                <h5>Request export</h5>
                <p>Request export of my data in a machine-readable form.</p>
                <router-link to="#" class="btn btn-outline-primary"
                  >Request data export</router-link
                >
              </div>

              <hr class="dropdown-divider my-4" />

              <div class="privacy-content">
                <h5>Request Correction</h5>
                <p>Request to correct, modify, or complete my data.</p>
                <router-link to="#" class="btn btn-outline-primary"
                  >Request correction</router-link
                >
              </div>

              <hr class="dropdown-divider my-4" />

              <div class="privacy-content">
                <h5>
                  Request Restriction of Processing (EU and Japan Residents
                  only)
                </h5>
                <p>Request that Qash stops processing my personal data.</p>
                <router-link to="#" class="btn btn-outline-primary"
                  >Request restriction</router-link
                >
              </div>

              <hr class="dropdown-divider my-4" />

              <div class="privacy-content">
                <h5>Manage Cookies</h5>
                <p>Manage your cookie preferences.</p>
                <a to="#" class="btn btn-outline-primary">Request cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </setting-layout>
</template>

<script>
import SettingLayout from "../../../components/qCash/settings/SettingLayout";
export default {
  components: { SettingLayout },
};
</script>

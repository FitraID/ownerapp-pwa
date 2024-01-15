<template>
  <setting-layout :title="'Activity'" :activeSettingMenu="4">
    <div class="card-body">
      <div class="row">
        <div class="col-xxl-12">
          <div class="card h-unset">
            <div class="card-header">
              <h4 class="card-title">Third-Party Applications</h4>
            </div>
            <div class="card-body">
              <div class="d-flex align-items-center">
                <span class="me-3 icon-circle bg-warning text-white"
                  ><i class="icofont-question-square"></i
                ></span>
                <div>
                  <h5 class="mb-0">
                    You haven't authorized any applications yet.
                  </h5>
                  <p>
                    After connecting an application with your account, you can
                    manage or revoke its access here.
                  </p>
                  <router-link to="#" class="btn btn-primary"
                    >Authorize now</router-link
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="card h-unset">
            <div class="card-header">
              <h4 class="card-title">Web Sessions</h4>

              <small
                >These sessions are currently signed in to your account. Sign
                out all other sessions</small
              >
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Signed In</th>
                      <th>Browser</th>
                      <th>IP Address</th>
                      <th>Near</th>
                      <th>Current</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 day ago</td>
                      <td>Chrome (Windows)</td>
                      <td>250.364.239.254</td>
                      <td>Bangladesh, Dhaka</td>
                      <td>
                        <span><i class="icofont-check-alt"></i></span>
                        <span><i class="icofont-close-line"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>1 day ago</td>
                      <td>Chrome (Windows)</td>
                      <td>250.364.239.254</td>
                      <td>Bangladesh, Dhaka</td>
                      <td>
                        <span><i class="icofont-check-alt"></i></span>
                        <span><i class="icofont-close-line"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>1 day ago</td>
                      <td>Chrome (Windows)</td>
                      <td>250.364.239.254</td>
                      <td>Bangladesh, Dhaka</td>
                      <td>
                        <span><i class="icofont-check-alt"></i></span>
                        <span><i class="icofont-close-line"></i></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="card h-unset">
            <div class="card-header">
              <h4 class="card-title">Confirmed Devices</h4>

              <small
                >These devices are currently allowed to access your account.
                Remove all other devices</small
              >
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-responsive">
                  <thead>
                    <tr>
                      <th>Confirmed</th>
                      <th>Browser</th>
                      <th>IP Address</th>
                      <th>Near</th>
                      <th>Current</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 day ago</td>
                      <td>Chrome (Windows)</td>
                      <td>250.364.239.254</td>
                      <td>Bangladesh, Dhaka</td>
                      <td>
                        <span><i class="icofont-check-alt"></i></span>
                        <span><i class="icofont-close-line"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>8 days ago</td>
                      <td>Chrome (Windows)</td>
                      <td>250.364.239.254</td>
                      <td>Bangladesh, Dhaka</td>

                      <td>
                        <span><i class="icofont-check-alt"></i></span>
                        <span><i class="icofont-close-line"></i></span>
                      </td>
                    </tr>
                    <tr>
                      <td>15 days ago</td>
                      <td>Chrome (Windows)</td>
                      <td>250.364.239.254</td>
                      <td>Bangladesh, Dhaka</td>

                      <td>
                        <span><i class="icofont-check-alt"></i></span>
                        <span><i class="icofont-close-line"></i></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="card h-unset">
            <div class="card-header">
              <h4 class="card-title">Account Activity</h4>

              <small>Recent activity on your account.</small>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Source</th>
                      <th>IP Address</th>
                      <th>Location</th>
                      <th>When</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>verified second factor</td>
                      <td>api</td>
                      <td>157.119.239.254</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">about 1 hour ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>verified second factor</td>
                      <td>api</td>
                      <td>157.119.239.254</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">about 2 hours ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>second factor failure</td>
                      <td>api</td>
                      <td>157.119.239.254</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">about 2 hours ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>device confirmation completed</td>
                      <td>web</td>
                      <td>157.119.239.254</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">1 day ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signin</td>
                      <td>web</td>
                      <td>157.119.239.254</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">1 day ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>verified second factor</td>
                      <td>web</td>
                      <td>157.119.239.254</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">1 day ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signout</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signin</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>verified second factor</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signout</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signout</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>device confirmation completed</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signin</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>verified second factor</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">8 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signout</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>verified second factor</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signin</td>
                      <td>web</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signout</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>verified second factor</td>
                      <td>web</td>
                      <td>23.106.249.39</td>
                      <td>Singapore</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>verified second factor</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>phone verified</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>phone added</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                    <tr>
                      <td>signin</td>
                      <td>api</td>
                      <td>157.119.239.214</td>
                      <td>Bangladesh</td>
                      <td>
                        <router-link to="#">15 days ago</router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="card h-unset">
            <div class="card-header">
              <h4 class="card-title">Close Account</h4>
            </div>
            <div class="card-body">
              <p>
                Withdraw funds and close your Qash account -
                <span class="text-danger">this cannot be undone</span>
              </p>
              <router-link to="#" class="btn btn-danger"
                >Close Account</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </setting-layout>
</template>

<script>
import SettingLayout from "../../../components/qCash/settings/SettingLayout.vue";
export default {
  components: { SettingLayout },
};
</script>

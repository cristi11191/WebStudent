import React from 'react';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/temp.css';

const NotificationPanel = () => {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-lg-9 right">
          <div className="box shadow-sm rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Recent</h6>
            </div>
            <div className="box-body p-0">
              <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                  />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                  <div className="small">
                    Income tax sops on the cards, The bias in VC funding, and other top news for you
                  </div>
                </div>
                <span className="ml-auto mb-auto">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light btn-sm rounded"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-delete"></i> Delete
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-close"></i> Turn Off
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="text-right text-muted pt-1">3d</div>
                </span>
              </div>
              <div className="p-3 d-flex align-items-center osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="mb-2">
                    We found a job at askbootstrap Ltd that you may be interested in Vivamus imperdiet
                    venenatis est...
                  </div>
                  <button type="button" className="btn btn-outline-success btn-sm">
                    View Jobs
                  </button>
                </div>
                <span className="ml-auto mb-auto">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light btn-sm rounded"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-delete"></i> Delete
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-close"></i> Turn Off
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="text-right text-muted pt-1">4d</div>
                </span>
              </div>
            </div>
          </div>
          <div className="box shadow-sm rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Earlier</h6>
            </div>
            <div className="box-body p-0">
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">
                  DRM
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                  <div className="small">
                    Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.
                  </div>
                </div>
                <span className="ml-auto mb-auto">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light btn-sm rounded"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-delete"></i> Delete
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-close"></i> Turn Off
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="text-right text-muted pt-1">3d</div>
                </span>
              </div>
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                  />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                  <div className="small">
                    Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus
                    ullamcorper
                  </div>
                </div>
                <span className="ml-auto mb-auto">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light btn-sm rounded"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-delete"></i> Delete
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-close"></i> Turn Off
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="text-right text-muted pt-1">3d</div>
                </span>
              </div>
              <div className="p-3 d-flex align-items-center osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                  />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: FRIDAY</div>
                  <div className="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et
                    sollicitudin. Praesent venenatis magna at molestie tristique.
                  </div>
                </div>
                <span className="ml-auto mb-auto">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-light btn-sm rounded"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-dots-vertical"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-delete"></i> Delete
                      </button>
                      <button className="dropdown-item" type="button">
                        <i className="mdi mdi-close"></i> Turn Off
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="text-right text-muted pt-1">3d</div>
                </span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary btn-sm pl-4 pr-4">
              View All Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;

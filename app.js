// extra helpers used only in the HTML layer
function filterAndShowVendors(cat) {
  var list = cat === 'All'
    ? S.vendors
    : S.vendors.filter(function(v) {
        return v.category === cat;
      });

  var html = list.map(function(v) {
    return '<div class="vendor-card">' +
      '<h4>' + v.name + '</h4>' +
      '<p>' + v.category + '</p>' +
      '<p style="font-size:11px;">Contact: ' + (v.contact || 'N/A') + '</p>' +
      '<button class="btn btn-white btn-sm" style="margin-top:6px;" onclick="openVendorProducts(' + v.id + ')">Shop Item</button>' +
      '</div>';
  }).join('');

  document.getElementById('vendors-all-grid').innerHTML =
    html || '<p class="empty">No vendors.</p>';
}

// Initialise vendor list page when navigating to it
var _origGo = go;

go = function(id) {
  _origGo(id);
  if (id === 'pg-vendors-list') {
    filterAndShowVendors('All');
  }
};

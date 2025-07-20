function handleBootstrap () {
  /* Tooltips */
  jQuery('.tooltips').tooltip()
  jQuery('.tooltips-show').tooltip('show')
  jQuery('.tooltips-hide').tooltip('hide')
  jQuery('.tooltips-toggle').tooltip('toggle')
  jQuery('.tooltips-destroy').tooltip('destroy')

  /* Popovers */
  jQuery('.popovers').popover()
  jQuery('.popovers-show').popover('show')
  jQuery('.popovers-hide').popover('hide')
  jQuery('.popovers-toggle').popover('toggle')
  jQuery('.popovers-destroy').popover('destroy')
}

function handleSearch () {
  jQuery('.search').click(function () {
    if (jQuery('.search-btn').hasClass('fa-search')) {
      jQuery('.search-open').fadeIn(500)
      jQuery('.search-btn').removeClass('fa-search')
      jQuery('.search-btn').addClass('fa-times')
    } else {
      jQuery('.search-open').fadeOut(500)
      jQuery('.search-btn').addClass('fa-search')
      jQuery('.search-btn').removeClass('fa-times')
    }
  })
}

function handleToggle () {
  jQuery('.list-toggle').on('click', function () {
    jQuery(this).toggleClass('active')
  })
}

function handleSwitcher () {
  const panel = jQuery('.style-switcher')

  jQuery('.style-switcher-btn').click(function () {
    jQuery('.style-switcher').show()
  })

  jQuery('.theme-close').click(function () {
    jQuery('.style-switcher').hide()
  })

  jQuery('li', panel).click(function () {
    const color = jQuery(this).attr('data-style')
    const data_header = jQuery(this).attr('data-header')
    setColor(color, data_header)
    jQuery('.list-unstyled li', panel).removeClass('theme-active')
    jQuery(this).addClass('theme-active')
  })

  var setColor = function (color, data_header) {
    jQuery('#style_color').attr('href', 'assets/css/themes/' + color + '.css')
    if (data_header == 'light') {
      jQuery('#style_color-header-1').attr('href', 'assets/css/themes/headers/header1-' + color + '.css')
      jQuery('#logo-header').attr('src', 'assets/img/logo1-' + color + '.png')
      jQuery('#logo-footer').attr('src', 'assets/img/logo2-' + color + '.png')
    } else if (data_header == 'dark') {
      jQuery('#style_color-header-2').attr('href', 'assets/css/themes/headers/header2-' + color + '.css')
      jQuery('#logo-header').attr('src', 'assets/img/logo1-' + color + '.png')
      jQuery('#logo-footer').attr('src', 'assets/img/logo2-' + color + '.png')
    }
  }
}

function handleBoxed () {
  jQuery('.boxed-layout-btn').click(function () {
    jQuery(this).addClass('active-switcher-btn')
    jQuery('.wide-layout-btn').removeClass('active-switcher-btn')
    jQuery('body').addClass('boxed-layout container')
  })
  jQuery('.wide-layout-btn').click(function () {
    jQuery(this).addClass('active-switcher-btn')
    jQuery('.boxed-layout-btn').removeClass('active-switcher-btn')
    jQuery('body').removeClass('boxed-layout container')
  })
}

function handleHeader () {
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery('.header-fixed .header').addClass('header-fixed-shrink')
    } else {
      jQuery('.header-fixed .header').removeClass('header-fixed-shrink')
    }
  })
}

function appInit () {
  console.log('WOOF')
  handleBootstrap()
  handleSearch()
  handleToggle()
  handleSwitcher()
  handleBoxed()
  handleHeader()
}

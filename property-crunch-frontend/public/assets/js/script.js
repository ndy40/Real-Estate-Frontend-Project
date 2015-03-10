/*
Script For: Property Crunch Website
Author: Arslan Akram
Website: http://pixelative.co
Version: 1.0
*/

(function($) {
	"use strict";
	
	/**********************************************************************/
	/*	Document.Ready: DOM is Ready
	/**********************************************************************/	
	$(document).ready(function() {
		
		/**********************************************************************/
		/* Chrome Detection
		/**********************************************************************/
		var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
		
		if (isChrome) {
			$('html').addClass('chrome');
		} 
		/**********************************************************************/
		/*	Home Page
		/**********************************************************************/
		/**********************************************************************/
		/*	Home Page > ScrollSpy
		/**********************************************************************/
		if ($('header#top').hasClass('home-header')) {
			$('body').scrollspy({ target: '.navbar-collapse' });
			
			$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {
			
			   // prevent default anchor click behavior
			   e.preventDefault();
				
				
				$('.navbar-collapse').removeClass('in');
				
			   // store hash
			   var hash = this.hash;
			
			   // animate
			   $('html, body').animate({
				   scrollTop: $(this.hash).offset().top
				 }, 900, function(){
			
				   // when done, add hash to url
				   // (default click behaviour)
				   window.location.hash = hash;
				 });
			
			});
			
			// To Top Function
			$(".navbar-brand").on('click', function(e) {
			
			   // prevent default anchor click behavior
			   e.preventDefault();
			
			   // store hash
			   var hash = this.hash;
			
			   // animate
			   $('html, body').animate({
				   scrollTop: $(this.hash).offset().top
				 }, 900, function(){
			
				   // when done, add hash to url
				   // (default click behaviour)
				   window.location.hash = hash;
				 });
			
			});
		}
		
		/**********************************************************************/
		/*	Login / Sign Up Page
		/**********************************************************************/
		/**********************************************************************/
		/*	Login / Sign Up Page > Tabs
		/**********************************************************************/
		$('#login_create_tab a').click(function (e) {
			e.preventDefault();
			$(this).tab('show'); // Select first tab
		})
		
			
		/**********************************************************************/
		/*	Responsive Text 
		/**********************************************************************/
		/**********************************************************************/
		/*	Responsive Text > Login Page Create Account 
		/**********************************************************************/
		/**********************************************************************/
		/*	Responsive Text > Login Page Create Account > Phones
		/**********************************************************************/
		function createTabTextPhone() {
			var createTab = $('#createTab');
			
			if (createTab.length) {
				createTab.html('Create Account');
			}
		}


		/**********************************************************************/
		/*	Responsive Text > Login Page Create Account > Tablet & Desktop
		/**********************************************************************/
		function createTabText() {
			var createTab = $('#createTab');
			
			if (createTab.length) {
				createTab.html('Create an Account');
			}
		}
		
		/**********************************************************************/
		/*	Responsive Text > Property Details Page Est. Rent
		/**********************************************************************/
		/**********************************************************************/
		/*	Responsive Text > Property Details Page Est. Rent > Phones
		/**********************************************************************/
		function estRentalTextPhone() {
			var estRentalYield = $('.property-data .est-yield'),
				estRentalIncome = $('.property-data .est-income');
			
			if (estRentalYield.length) {
				estRentalYield.html('Est. Rental Yield: ');
			}
			
			if (estRentalIncome.length) {
				estRentalIncome.html('Est. Rental Income: ');
			}
		}
		
		/**********************************************************************/
		/*	Responsive Text > Property Details Page Est. Rent > Tablet & Desktop
		/**********************************************************************/
		function estRentalText() {
			var estRentalYield = $('.property-data .est-yield'),
				estRentalIncome = $('.property-data .est-income');
			
			if (estRentalYield.length) {
				estRentalYield.html('Estimated Rental Yield: ');
			}
			
			if (estRentalIncome.length) {
				estRentalIncome.html('Estimated Rental Income: ');
			}
		}
		
		/**********************************************************************/
		/*	Search Results Page
		/**********************************************************************/
		/**********************************************************************/
		/*	Search Results Page > Custom Dropdowns
		/**********************************************************************/
		var isIe8 = $('.no-multiplebgs').length;
		
		if (!isIe8) {
			$('#property_price, #property_type, #property_beds, #property_yield, #select-results').selectize({
				create: true,
				dropdownParent: 'body'
			});
		}
		
		
		
		/**********************************************************************/
		/*	Search Results Page > Tooltips
		/**********************************************************************/
		$('.has-tooltip').tooltip();
		
		
		/**********************************************************************/
		/*	Property Details Page > Carousel 
		/**********************************************************************/
		var propertyCarousel = $("#property-carousel");
	
		  propertyCarousel.owlCarousel({			
			items : 4, //10 items above 1000px browser width
			itemsDesktop : [1199,3], //5 items between 1000px and 901px
			itemsDesktopSmall : [991,2], // 3 items betweem 900px and 601px
			itemsTablet: [767,2], //2 items between 600 and 0;
			itemsMobile : [479,1], // itemsMobile disabled - inherit from itemsTablet option
			slideSpeed: 500,
			autoPlay: false,
		  });
		  
		  // Custom Navigation Events
		  $(".next").click(function(){
			propertyCarousel.trigger('owl.next');
		  })
		  $(".prev").click(function(){
			propertyCarousel.trigger('owl.prev');
		  })
		
		$('#more-properties-toggle').on('click', function(e) {
  
			  if ($(this).hasClass('no-more')) {
				$('#no-more-properties').slideDown();
			  } else {
				$('#more-properties').slideDown();
				$(this).addClass('no-more');
			  }
		  
		});
		
		function carouselNavMargin() {
			var carouselWrapper = $('.carousel-wrapper'),
				wrapperHeight = carouselWrapper.height(),
				carouselNav = $('.carousel-nav'),
				carouselNavHeight = carouselNav.height(),
				calcPos = (wrapperHeight - carouselNavHeight)/2;
				
			if (carouselWrapper.length) {
				carouselNav.css('top', calcPos+'px');
			}
		}
		
		/**********************************************************************/
		/*	Last <li> Style Adjustment
		/**********************************************************************/
		
			$('.footer-links li:last-child').addClass('last-link');
			$('.nav.login li:last-child').addClass('last');
			$('.property-links ul li:last-child').addClass('last');
		
		
		/**********************************************************************/
		/*	Responsive Functions
		/**********************************************************************/
		function phoneFunctions() {
			createTabTextPhone();
			estRentalTextPhone();
		}
		
		function tabletFunctions() {	
			createTabText();
			estRentalText();
		}
		
		function desktopFunctions() {	
			createTabText();
			estRentalText();
			
		}
		
		function responsiveFunctions() {
			var winWidth = $(window).width();	
			
			//Init Smartphone Devices Layout
			if (winWidth < 768) {
				phoneFunctions();
			} 
			
			//Init Tablet Devices Layout
			else if (winWidth > 767 && winWidth < 992) {
				tabletFunctions();
			}
			
			//Init Desktop Devices Layout
			else if (winWidth > 991 && winWidth < 1200)   {
				desktopFunctions();
				$( ".price-chart" ).appendTo( ".property-details .container" );


			}
			
			else if (winWidth > 1199) {
				$( ".price-chart" ).appendTo( ".property-details .col-lg-5.col-md-6" );
			}
		
		}
		
		
		responsiveFunctions();
	
		/**********************************************************************/
		/*	Responsive Functions > Binding Re-Init on Resize
		/**********************************************************************/
		$(window).bind('resize', function( event ){
			var winWidth = $(window).width();
			responsiveFunctions();
		});
		
		
		/**********************************************************************/
		/*	IE8 Fixes
		/**********************************************************************/
		var rowfilterRow = $('.row.filter-row');
		
		if (isIe8) {
			
			rowfilterRow.removeClass('row');
		
		}
		
		/**********************************************************************/
		/*	Form Validation
		/**********************************************************************/
		$('.defaultForm').bootstrapValidator({
			message: 'This value is not valid',
			//live: 'submitted',
			feedbackIcons: {
				valid: 'icon-thumbsup',
				invalid: 'icon-warning',
				validating: 'icon-search'
			},
			fields: {
				email: {
					validators: {
						notEmpty: {
							message: 'The email address is required and can\'t be empty'
						},
						emailAddress: {
							message: 'The input is not a valid email address'
						}
					}
				},
				password: {
					validators: {
						notEmpty: {
							message: 'The password is required and can\'t be empty'
						},
						stringLength: {
							min: 5,
							max: 15,
							message: 'The password must be more than 5 and less than 15 characters long'
						}
					}
				}
			}
		})
		.on('success.form.bv', function(e) {
			// Prevent submit form
			e.preventDefault();

			var $form     			= $(e.target),
				validator 			= $form.data('bootstrapValidator'),
				loggedIn 			= $('.goToLoggedIn'),
				uploadProofModal	= $('#upload_proof'),
				emailSentModal 		= $('#email_sent'),
				passwordResetModal	= $('#reset_success');
			
			
			if (loggedIn.length) {
				$.cookie('status', 'loggedIn');
				window.location.href = "search_results.html";				
			}
			else if (uploadProofModal.length) {
				uploadProofModal.modal('show');
			} 
			else if (emailSentModal.length) {
				emailSentModal.modal('show');
			}
			else if (passwordResetModal.length) {
				passwordResetModal.modal('show');
			}
		});
		
		
		/**********************************************************************/
		/*	Post Search String in URL
		/**********************************************************************/
		var searchBtn = $("#search"),
			innerSearchBtn = $("#searchInner"),
			searchInputBar = $('#search_box');

		function doSearchMain() {
			var searchInput = encodeURI(searchInputBar.val());
			window.location.href = "search_results.html" + '?' + searchInput;
		}
		
		function doSearchInner() {
			var searchInput = encodeURI(searchInputBar.val());
			window.location.href = "../search_results.html" + '?' + searchInput;
		}
		
		// Main Pages
		searchBtn.click(function(){
			doSearchMain();
		});
		
		// Propertyy Details Page
		innerSearchBtn.click(function(){
			doSearchInner();
		});
		
		// On Enter Do Search 
		if (searchBtn.length) {
			searchInputBar.keyup(function (e) {
				if (e.keyCode == 13) {
					doSearchMain();
				}
			});
		} else if (innerSearchBtn.length) {
			searchInputBar.keyup(function (e) {
				if (e.keyCode == 13) {
					doSearchInner();
				}
			});
		}
		
		/**********************************************************************/
		/*	Price Field Beautify - Add (,) Seperator on Numbers
		/**********************************************************************/
		function priceFieldBeautify() {
			var propertyTitle = $('.property-title-group'),
				priceField = $('.property-title-group h4'),
				priceFieldOldVal = priceField.html(),
				priceFieldNewVal = 	'£' + $.number(priceFieldOldVal),
				noPriceinTitle = $('.noPrice');
			
			/* Comparables Listing using the same parent, 
			 * but has property title instead of price, so
			 * added .noPrice class to comparables listing */
			if (!propertyTitle.hasClass('noPrice')) {	
				priceField.html(priceFieldNewVal);
			}
		}
		//priceFieldBeautify();
		
		/**********************************************************************/
		/*	Est. Incom Field Beautify - Add (,) Seperator on Numbers
		/**********************************************************************/
		var estIncomeTitle = $('.est-income'),
			estIncomeValueField = estIncomeTitle.parent().siblings('.data-value'),
			estIncomeOldVal = 0;
			estIncomeOldVal += estIncomeValueField.html();
			
		var beautifiedVal = '£' + $.number(estIncomeOldVal);		
		
		if (estIncomeTitle.length) {
			estIncomeValueField.html(beautifiedVal);
		}
		
		/**********************************************************************/
		/*	Search Filters
		/**********************************************************************/
		/**********************************************************************/
		/*	Search Filters > Filter Init
		/**********************************************************************/
		function filterInit(template_type) {
			var searchPage = $('body.search_results').length;
			if (searchPage) {	
				
				// Mustache Rendering
				var searchHtml = $.trim($("#search_listing").html()),
					searchHtmlTemplate = Mustache.compile(searchHtml),
					searchView = function(searchData) {
						return (searchHtmlTemplate(searchData));
					};
				
				// Output Results on Callback
				var search_filter_callbacks = {
					after_filter: function(result) {
						if (result.length === 0) {
							$('.result_count').text('Sorry No Match Found');
							$('#noProperties').show();
							
							//Setting Avg Price & Rental to 0
							var avgPriceElement = $('.avgAskingPrice > span'),
								avgRentalElement = $('.avgRentalPrice > span');
								
							avgPriceElement.html('£0');
							avgRentalElement.html('£0');
						
						} else {
							if ($('#search_box').val().length > 0) { 
								$('.result_count').text('Showing Properties in ' + $('.searchbar').val() + ': '  + result.length + ' results');
							} else {
								$('.result_count').text('Showing a total of ' + result.length + ' Properties');
							}
							
							// Hide No Properties Alert
							$('#noProperties').hide();
							
							
							//Calculating & Setting Avg Price & Rental
							var filteredArray = result,
								totalPrice = 0,
								totalRental = 0,
								totalItems = result.length,
								calcAvgPrice = 0,
								calcAvgRental = 0,
								avgPriceElement = $('.avgAskingPrice > span'),
								avgRentalElement = $('.avgRentalPrice > span');
							
							$.each(filteredArray, function( index, value ) {
								var newVal = value-1;
								totalPrice += data[newVal].price;
								totalRental += data[newVal].rent;
							});
							
							
							calcAvgPrice = '£' + $.number(totalPrice/totalItems);
							calcAvgRental = '£' + $.number(totalRental/totalItems);
							avgPriceElement.html(calcAvgPrice);
							avgRentalElement.html(calcAvgRental);
							
							// Price Field Beautify
							//priceFieldBeautify();
							
							// Hiding DTV Overlay
							var cookieStatus = $.cookie("status"),
								dtvOverlay = $('.dtv-overlay')
								
							if (cookieStatus == "loggedIn") {
								dtvOverlay.hide();
							}
						}
					}
				};
				
				// Filter Fields 
				var searchOptions = {
					filter_criteria: {
						type: ['#hidden_property_type', 'type'],
						beds: ['#hidden_property_beds', 'beds'],
						price: ['#property_price .TYPE.range', 'price'],
						yield: ['#property_yield .TYPE.range', 'yield'],
						
						repossessed: ['#reposessed', 'repossessed'],
						modernising: ['#need-modernising', 'modernising'],
						auction: ['#auction', 'auction'],
						dtv: ['#direct-to-vendor', 'dtv'],
						reduced: ['#reduced-in-price', 'reduced']
					},
					search: {input: '#search_box' },
					and_filter_on: false, //If any filter selection is zero then select none. For 'OR' filter set 'false'
					callbacks: search_filter_callbacks, //Filter callback execute in filter init and each filtering event.
					
				};
					
				var fjs = FilterJS(data, "#properties_list", searchView, searchOptions);	
			}
		}
		
		/**********************************************************************/
		/*	Search Filters > Empty Data & Re-Init Filters
		/**********************************************************************/
		function reInitFilters() {
			var listingContainer = $('#properties_list');
			listingContainer.empty();
			filterInit();
			$('.has-tooltip').tooltip();
		}
		/**********************************************************************/
		/*	Search Filters > Select Boxes Using Hidden "Multiple" Selects
		/**********************************************************************/
		 
		$('#property_type, #property_beds').on('change', function() {
			
			var propertyType= $('#property_type'),
				hiddenPropertyType = $('#hidden_property_type'),
				propertyBeds = $('#property_beds'),
				hiddenPropertyBeds = $('#hidden_property_beds');
				
			
			// Property Type Select Box
			if (propertyType.val() == "all") {
				hiddenPropertyType.val(["flat", "terraced", "semi", "detached"]);
			}  else if (propertyType.val() == "flat") {
				hiddenPropertyType.val("flat");
			} else if (propertyType.val() == "terraced") {
				hiddenPropertyType.val("terraced");
			} else if (propertyType.val() == "semi") {
				hiddenPropertyType.val("semi");
			} else if (propertyType.val() == "detached") {
				hiddenPropertyType.val("detached");
			}
			
			// Property Beds Select Box
			if (propertyBeds.val() == "all") {
				hiddenPropertyBeds.val(["1", "2", "3"]);
			} 
			else if (propertyBeds.val() == "1") {
				hiddenPropertyBeds.val("1");
			}
			else if (propertyBeds.val() == "2") {
				hiddenPropertyBeds.val("2");
			}
			else if (propertyBeds.val() == "3") {
				hiddenPropertyBeds.val("3");
			}
			
			// Re-Init Filters on Change
			reInitFilters();
			
		});
		
		/**********************************************************************/
		/*	Search Filters > Advanced Filters
		/**********************************************************************/
		var repoLabel = $('#repo-label'),
			modLabel = $('#mod-label'),
			aucLabel = $('#auc-label'),
			dtvLabel = $('#dtv-label'),
			redLabel = $('#red-label'),
			allLabels = $('#repo-label, #mod-label, #auc-label, #dtv-label, #red-label'),
			repoCheck = $('#reposessed'),
			modCheck = $('#need-modernising'),
			aucCheck = $('#auction'),
			dtvCheck = $('#direct-to-vendor'),
			redCheck = $('#reduced-in-price');
		
		
		/**********************************************************************/
		/*	Search Filters > Advanced Filters > Hiding Label & Unchecking Box
		/**********************************************************************/
		repoLabel.on('click', function() {
			repoLabel.parent().hide();
			repoCheck.prop('checked', false);
			reInitFilters();
		});
		
		modLabel.on('click', function() {
			modLabel.parent().hide();
			modCheck.prop('checked', false);
			reInitFilters();
		});
		
		aucLabel.on('click', function() {
			aucLabel.parent().hide();
			aucCheck.prop('checked', false);
			reInitFilters();
		});
		
		dtvLabel.on('click', function() {
			dtvLabel.parent().hide();
			dtvCheck.prop('checked', false);
			reInitFilters();
		});
		
		redLabel.on('click', function() {
			redLabel.parent().hide();
			redCheck.prop('checked', false);
			reInitFilters();
		});
		
		
		/**********************************************************************/
		/*	Search Filters > Advanced Filters > Showing Label if Checked
		/**********************************************************************/
		repoCheck.on('click', function() {
			if ($(this).prop('checked'))  {
				repoLabel.parent().show();
			} else {
				repoLabel.parent().hide();
			}
			
			reInitFilters();
		});
		modCheck.on('click', function() {
			if ($(this).prop('checked'))  {
				modLabel.parent().show();
			} else {
				modLabel.parent().hide();
			}
			
			reInitFilters();
		});
		aucCheck.on('click', function() {
			if ($(this).prop('checked'))  {
				aucLabel.parent().show();
			} else {
				aucLabel.parent().hide();
			}
			
			reInitFilters();
		});
		dtvCheck.on('click', function() {
			if ($(this).prop('checked'))  {
				dtvLabel.parent().show();
			} else {
				dtvLabel.parent().hide();
			}
			
			reInitFilters();
		});
		redCheck.on('click', function() {
			if ($(this).prop('checked'))  {
				redLabel.parent().show();
			} else {
				redLabel.parent().hide();
			}
			
			reInitFilters();
		});
		
		
		/**********************************************************************/
		/*	Get & Replace Search String in URL
		/**********************************************************************/
		var searchSplit = decodeURI(window.location.search).split('?'),
			searchString = searchSplit[1];
			
		$(".searchbar").val(searchString);
		
		// Re-Init Filters after Search String Value Change
		reInitFilters();
		
		/**********************************************************************/
		/*	Save Cookies to Show Logged In Status
		/**********************************************************************/		
		var cookieStatus = $.cookie("status"),
			notLoggedNav = $('.notLogged'), 
			loggedInNav = $('.loggedIn');
			
		if (cookieStatus == "loggedIn") {
			notLoggedNav.addClass('hide');
			loggedInNav.addClass('show');
		} else {
			loggedInNav.addClass('hide');
			notLoggedNav.addClass('show');
		}
		
		/**********************************************************************/
		/*	Verify User
		/**********************************************************************/	
		var verifyUser = $('#verifyUser'),
			uploadProofModal	= $('#upload_proof'),
			showProofSuccessModal = $('#submitFile a'),
			proofSuccessModal = $('#proof_success'),
			emailUs = $('#emailUs'),
			checkVerifiedCookie = $.cookie("verified");
			
		
		function VerifiedUserSaveCookie() {
			$.cookie('verified', true);
		}
		
		if (checkVerifiedCookie) {
			verifyUser.hide();
		}
		
		verifyUser.on('click', function(e) {
			e.preventDefault();
			uploadProofModal.modal('show');
		});
		
		emailUs.on('click', function() {
			verifyUser.hide();
			VerifiedUserSaveCookie();
			uploadProofModal.modal('hide');
		});
		
		showProofSuccessModal.on('click', function(e) {
			e.preventDefault();
			
			verifyUser.hide();
			VerifiedUserSaveCookie();
			uploadProofModal.modal('hide');
			proofSuccessModal.modal('show');
		});
	});
	
})(jQuery);
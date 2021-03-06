$(document).ready(function () {
    /* scroll */
    let header = $('.header');
    let scrollOffset = 0;

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= 20) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    });

    /* burger */

    $('.burger').on('click', function () {

        $(this).toggleClass('burger--active');
        $('.header__content').toggleClass('active');
        $('.header__content-box').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    $('.header__content-box').on('click', function () {

        $('.burger').removeClass('burger--active');
        $('.header__content').removeClass('active');
        $('.header__content-box').removeClass('active');
        $('body').removeClass('no-scroll');

    });

    $('.header__menu-link').on('click', function () {

        $('.burger').removeClass('burger--active');
        $('.header__content').removeClass('active');
        $('.header__content-box').removeClass('active');
        $('body').removeClass('no-scroll');

    });

    $('.header__content').on('click', function (event) {
        event.stopPropagation();
    });

    /* modal */
    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalId = $this.data('modal');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');
        if (document.querySelector('.invoice__read').scrollHeight >= window.innerHeight) {
            $('.modal').addClass('flex-start');
        } else {
            $('.modal').removeClass('flex-start');
        }
        if (document.querySelector('.wagons__read').scrollHeight >= window.innerHeight) {
            $('.modal').addClass('flex-start');
        } else {
            $('.modal').removeClass('flex-start');
        }
    });

    modalClose.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $('body').removeClass('no-scroll');
        $('.modal').removeClass('flex-start');
    });

    $('.modal').on('click', function (event) {
        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
        $('.modal').removeClass('flex-start');
    });

    $('.modal__content').on('click', function (event) {
        event.stopPropagation();
    });

    $('.modal__content').on('input', '.input-words', function () {
        this.value = this.value.replace(/[^a-z??-????\s]/gi, '');
    });

    /* slider */
//    $('.intro__slider').slick({
//        nextArrow: ' <button class="click__arrow next"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.58281e-07 4.99998C2.66115e-07 4.82076 0.0720284 4.64156 0.215782 4.50492L4.74168 0.205142C5.02959 -0.0683806 5.49637 -0.0683806 5.78416 0.205142C6.07195 0.478554 6.07195 0.921935 5.78416 1.19548L1.77939 4.99998L5.78402 8.80451C6.07181 9.07803 6.07181 9.52137 5.78402 9.79476C5.49623 10.0684 5.02945 10.0684 4.74154 9.79476L0.215642 5.49504C0.0718648 5.35834 2.5045e-07 5.17914 2.58281e-07 4.99998Z" fill="white" fill-opacity="0.8"/></svg> </button>',
//        prevArrow: '<button class="click__arrow prev"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.58281e-07 4.99998C2.66115e-07 4.82076 0.0720284 4.64156 0.215782 4.50492L4.74168 0.205142C5.02959 -0.0683806 5.49637 -0.0683806 5.78416 0.205142C6.07195 0.478554 6.07195 0.921935 5.78416 1.19548L1.77939 4.99998L5.78402 8.80451C6.07181 9.07803 6.07181 9.52137 5.78402 9.79476C5.49623 10.0684 5.02945 10.0684 4.74154 9.79476L0.215642 5.49504C0.0718648 5.35834 2.5045e-07 5.17914 2.58281e-07 4.99998Z" fill="white" fill-opacity="0.8"/></svg></button>',
//        fade: true,
//        autoplay: true,
//    });

    maskPhone(document.querySelector('.select__current').children[0].id);

    function maskPhone(id) {
        var country = id;
        switch (country) {
            case "kz":
                $("#phone").mask("+7(999) 999-99-99");
                $('#phone')[0].placeholder = '+7 (___) ___-__-__';
                $('#phone').focus(function () {
                    $(this).val('+7');
                });
                break;
            case "ru":
                $("#phone").mask("+7(999) 999-99-99");
                $('#phone')[0].placeholder = '+7 (___) ___-__-__';
                $('#phone').focus(function () {
                    $(this).val('+7');
                });
                break;
            case "by":
                $("#phone").mask("+375(999) 999-99-99");
                $('#phone')[0].placeholder = '+375 (___) ___-__-__';
                $('#phone')[0].style.backgroundImage = 'url()';
                $('#phone').focus(function () {
                    $(this).val('+375');
                });
                break;
        }
    }
    maskPhone();
    $("#phone").mask("+7(999) 999-99-99");
    $('.header__menu-item').on('click', function () {
        $(this).addClass('active')
    });


    /* page btn */
    $('.page__buttons-btn').on('click', function (event) {
        $(this).toggleClass('active');
        $('.page__buttons-inner').toggleClass('active');
    });

    $('.wagons__accordion-title').on('click', function () {
        $(this).next('.wagons__accordion-content').slideToggle();
        $(this).toggleClass('active');
    });




    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            maskPhone(this.children[0].id);
            $('.select__current')[0].children[0].src = this.children[0].src;
            select.classList.remove('is-active');
        }

    };


    select();

    $('.vacancy__form-file').change(function () {
        if (this.files[0])
            $('.vacancy__form-label').text(this.files[0].name);
    });




});

$(document).ready(function () {
    $('.fz_name').show();
    $('.fz_age, .fz_months, .fz_weight, .fz_food, .fz_weight_a, .fz_senior, .fz_activities').hide();
    $('.aw_next_btn').on('click', function () {
        var id = $(this).data('next');
        console.log(id);
        $('.aw').removeClass('active');
        $('.aw-' + id).addClass('active');
        $('.aw').hide();
        $('.aw-' + id).show();
    });
    $('#dog_age1').on('click', function(){
        $('.fz_age, .fz_months, .fz_weight, .fz_food, .fz_weight_a, .fz_senior, .fz_activities').hide();
        $('.aw_adult_weight').show();
    });
    $('.weight_next').on('click', function(){
        $('.fz_age, .fz_months, .fz_weight, .fz_food, .fz_weight_a, .fz_senior, .fz_activities').hide();
        $('.aw_activities').show();
    });
    $('.activies_next').on('click', function(){
        $('.fz_age, .fz_months, .fz_weight, .fz_food, .fz_weight_a, .fz_senior, .fz_activities').hide();
        $('.aw_raw_food').show();
    });
    $('#dog_age2').on('click', function(){
        $('.fz_age, .fz_months, .fz_weight, .fz_food, .fz_weight_a, .fz_senior, .fz_activities').hide();
        $('.aw_senior_weight').show();
    });
    $('.senior_next').on('click', function(){
        $('.fz_age, .fz_months, .fz_weight, .fz_food, .fz_weight_a, .fz_senior, .fz_activities').hide();
        $('.aw_activities').show();
    });










}); 
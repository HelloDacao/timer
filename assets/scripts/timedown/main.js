define(function (require, exports, module) {
    var $ = require('jquery');//引入jquery
    require('onepage')($);
    require('timer')($);//共享给jquery
    require('jstorage')($);//共享给jquery


    $('.main').onepage_scroll({
        sectionContainer: ".container-fluid",
        easing: "ease-in",
        loop: false
    });



    $("#timedown1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn1",
        stop_btn_id: "stopBtn1",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown1_1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn1_1",
        stop_btn_id: "stopBtn1_1",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown2").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn2",
        stop_btn_id: "stopBtn2",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown2_1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn2_1",
        stop_btn_id: "stopBtn2_1",
        reset_btn_id: 'doubleResetBtn2',
    });

     $("#timedown3").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn3",
        stop_btn_id: "stopBtn3",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown3_1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn3_1",
        stop_btn_id: "stopBtn3_1",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown4").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn4",
        stop_btn_id: "stopBtn4",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown4_1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn4_1",
        stop_btn_id: "stopBtn4_1",
        reset_btn_id: 'doubleResetBtn2',
    });
    $("#timedown5").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn5",
        stop_btn_id: "stopBtn5",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown5_1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn5_1",
        stop_btn_id: "stopBtn5_1",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown6").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn6",
        stop_btn_id: "stopBtn6",
        reset_btn_id: 'resetBtn6',
    });

    $("#timedown6_1").custimer({
        time_length: 180,
        begin_btn_id: "beginBtn6_1",
        stop_btn_id: "stopBtn6_1",
        reset_btn_id: 'resetBtn6_1',
    });

    $("#timedown7").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn7",
        stop_btn_id: "stopBtn7",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown7_1").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn7_1",
        stop_btn_id: "stopBtn7_1",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown8").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn7",
        stop_btn_id: "stopBtn7",
        reset_btn_id: 'doubleResetBtn2',
    });

    $("#timedown8_1").custimer({
        time_length: 240,
        begin_btn_id: "beginBtn7_1",
        stop_btn_id: "stopBtn7_1",
        reset_btn_id: 'doubleResetBtn2',
    });


///////////////
    var flag = 2;

    $("#beginBtn1").on('click', function () {
        flag = 1;
        console.log(3)
    });
    $("#beginBtn1_1").on('click', function () {
        flag = 0;
    });
    $("#doubleBtn1").on('click', function () {
        if (flag == 1) {
            $("#stopBtn1").click();
            $("#beginBtn1_1").click();
        } else if (flag == 0) {
            $("#stopBtn1_1").click();
            $("#beginBtn1").click();
        } else {
            $("#beginBtn1").click();
        }
    });

    $("#doubleStopBtn1").on('click', function () {
        $("#stopBtn1").click();
        $("#stopBtn1_1").click();
        flag = 2;
    });

    /////////


///////////////
    var flag = 2;

    $("#beginBtn6").on('click', function () {
        flag = 1;
        console.log(3)
    });
    $("#beginBtn6_1").on('click', function () {
        flag = 0;
    });
    $("#doubleBtn").on('click', function () {
        if (flag == 1) {
            $("#stopBtn6").click();
            $("#beginBtn6_1").click();
        } else if (flag == 0) {
            $("#stopBtn6_1").click();
            $("#beginBtn6").click();
        } else {
            $("#beginBtn6").click();
        }
    });

    $("#doubleStopBtn").on('click', function () {
        $("#stopBtn6").click();
        $("#stopBtn6_1").click();
        flag = 2;
    });

    /////////

    var flag22 = 2;
    $("#beginBtn7").on('click', function () {
        flag22 = 1;
    });
    $("#beginBtn7_1").on('click', function () {
        flag22 = 0;
    });
    $("#doubleBtn2").on('click', function () {
        if (flag22 == 1) {
            $("#stopBtn7").click();
            $("#beginBtn7_1").click();
        } else if (flag22 == 0) {
            $("#stopBtn7_1").click();
            $("#beginBtn7").click();
        } else {
            $("#beginBtn7").click();
        }
    });

    $("#doubleStopBtn2").on('click', function () {
        $("#stopBtn7").click();
        $("#stopBtn7_1").click();
        if (flag22 == 1) {
            flag22 = 1
        }
        if (flag22 == 0) {
            flag22 = 0
        }

    });

    var matrix = [
        [
            {full: 0}, {full: 1, moveDirection: 'yx'}, {full: 0}
        ],
        [
            {full: 1}, {full: 1, first: true}, {full: 1}
        ],
        [
            {full: 0}, {full: 1, moveDirection: 'yx'}, {full: 0}
        ]
    ];


});


window.addEventListener("DOMContentLoaded", () => {
    console.log("window, ready");
    let pno = 0;
    // 전체 페이지수
    const totnum = 7;
    // 광스크롤 상태변수
    let prot_sc = 0; //0-허용, 1-불허용
    // 스크롤애니메이션 시간
    const dur_sc = 700;
    // 스크롤이징
    const easing_sc = "easeInOutQuint";

    $(function () { ////// jQB 
        let rotationAngle = 0; // 회전 각도를 저장하는 변수
        const pageRotationConfig = { // 각 페이지회전 각도설정
            0: { angle: 0 }, // 첫 페이지
            1: { angle: 90 }, // 두 번째 페이지
            2: { angle: 50}, // 세 번째 페이지
            3: { angle: 180 }, // 네 번째 페이지
            4: { angle: 230 }, // 다섯 번째 페이지
            5: { angle: 180 }, // 여섯 번째 페이지
            6: { angle: 180 } // 일곱 번째 페이지
        };

        let pageStyleConfig = {
            0: {
                logo: {
                    width: '317.5px',
                    height: '350px',
                    top: '30%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                },
                square: {
                    width: '100%',
                    height: '100%',
                    top: '0%',
                    left: '0%'
                },
                car: {
                    width: '1000px',
                    height: '1000px',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                },
                p9c: {
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                },

            },
            1: {
                logo: {
                    width: '79.375px',
                    height: '87.5px',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                },
                square: {
                    width: '100%',
                    height: '100%',
                    top: '-30%',
                    left: '0%'
                },
                car: {
                    width: '1000px',
                    height: '1000px',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                },
                p9c: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '36%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textDecorationLine: 'none',
                    color: 'rgb(58, 55, 56)'
                },
                pg2text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '100%',
                    left: '50%'
                },
                dtiBox: {
                    top: '55%',
                    left: '-55%'
                },
                d1: {
                    top: '55px',
                    left: '0%'
                },
                d2: {
                    top: '55px',
                    left: '150%'
                },
                d3: {
                    top: '55px',
                    left: '255%'
                },
             },


            2: {

                logo: {
                    width: '79.375px',
                    height: '87.5px',
                    top: '10%',
                    left: '93%'
                },
                square: {
                    width: '100%',
                    height: '100%',
                    top: '0%',
                    left: '-15%'
                },
                car: {
                    width: '1000px',
                    height: '1000px',
                    top: '15%',
                    left: '80%'
                },
                p9c: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '90px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#fff',
                    fontSize: '8vw',
                    textDecorationThickness: '5px',
                    textDecorationLine: 'underline',
                    textDecorationColor: 'rgb(255, 218, 91)',
                    textUnderlineOffset: '25px'
                },
                pg2text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '27%',
                    left: '50%'
                },
                dtiBox: {
                    top: '55%',
                    left: '18.8%'
                },
                pg3_1text: {
                    top: '30%',
                    left: '-50%'
                },
                pg3_2text: {
                    top: '25%',
                    right: '-50%'
                },
                pg3_3text: {
                    top: '46%',
                    right: '-50%'
                },
                d1: {
                    top: '55px',
                    left: '0%'
                },
                d2: {
                    top: '55px',
                    left: '150px'
                },
                d3: {
                    top: '55px',
                    left: '255px'
                },
             },


            3: {
                logo: {
                    width: '79.375px',
                    height: '87.5px',
                    top: '10%',
                    left: '93%'

                },
                square: {
                    width: '100%',
                    height: '100%',
                    top: '0%',
                    left: '-50%'
                },
                car: {
                    width: '1000px',
                    height: '1000px',
                    top: '0%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                },
                p9c: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '90px',
                    left: '25%',
                    transform: 'translateX(-50%)',
                    fontSize: '5vw'
                },
                pg2text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '27%',
                    left: '-50%'
                },
                dtiBox: {
                    top: '45%',
                    left: '5%'
                },
                pg3_1text: {
                    top: '30%',
                    left: '7%'
                },
                pg3_2text: {
                    top: '25%',
                    right: '5%'
                },
                pg3_3text: {
                    top: '46%',
                    right: '5%'
                },
                d1: {
                    top: '65px',
                    left: '5%'
                },
                d2: {
                    top: '135px',
                    left: '5%'
                },
                d3: {
                    top: '205px',
                    left: '5%'
                },
                pg4text: {
                    top: '25%',
                    right: '-50%'
                },

            },
             4: {

                logo: {
                    width: '79.375px',
                    height: '87.5px',
                    top: '10%',
                    left: '93%'
                },
                square: {
                    width: '100%',
                    height: '100%',
                    top: '0%',
                    left: '-85%'
                },
                car: {
                    width: '1000px',
                    height: '1000px',
                    top: '0%',
                    left: '20%',
                    transform: 'translateX(-50%)'
                },
                p9c: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '90px',
                    left: '-50%',
                    transform: 'translateX(-50%)',
                    fontSize: '5vw'
                },
                pg2text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '-50%',
                    left: '-50%'
                },
                dtiBox: {
                    top: '45%',
                    left: '-50%'
                },
                pg3_1text: {
                    top: '30%',
                    left: '-50%'
                },
                pg3_2text: {
                    top: '25%',
                    right: '-50%'
                },
                pg3_3text: {
                    top: '46%',
                    right: '-50%'
                },
                d1: {
                    top: '65px',
                    left: '-50%'
                },
                d2: {
                    top: '135px',
                    left: '-50%'
                },
                d3: {
                    top: '205px',
                    left: '-50%'
                },
                pg4text: {
                    top: '25%',
                    right: '15%'
                },              

            },

            5: {

                logo: {
                    width: '79.375px',
                    height: '87.5px',
                    top: '10%',
                    left: '93%'
                },
                square: {
                    width: '100%',
                    height: '100%',
                    top: '-30%',
                    left: '0%'
                },
                car: {
                    width: '1000px',
                    height: '1000px',
                    top: '0%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                },
                p9c: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '90px',
                    left: '-50%',
                    transform: 'translateX(-50%)',
                    fontSize: '5vw'
                },
                pg2text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '-50%',
                    left: '-50%'
                },
                dtiBox: {
                    top: '45%',
                    left: '-50%'
                },
                pg3_1text: {
                    top: '30%',
                    left: '-50%'
                },
                pg3_2text: {
                    top: '25%',
                    right: '-50%'
                },
                pg3_3text: {
                    top: '46%',
                    right: '-50%'
                },
                d1: {
                    top: '65px',
                    left: '-50%'
                },
                d2: {
                    top: '135px',
                    left: '-50%'
                },
                d3: {
                    top: '205px',
                    left: '-50%'
                },
                pg4text: {
                    top: '25%',
                    right: '-50%'
                },


            },

            6: {

                logo: {
                    width: '79.375px',
                    height: '87.5px',
                    top: '10%',
                    left: '150%'
                },
                square: {
                    width: '100%',
                    height: '100%',
                    top: '0%',
                    left: '0%'
                },
                car: {
                    width: '20%',
                    height: '60%',
                    top: '-40%',
                    left: '50%',
                    transform: 'translateX(-50%)'

                },


            }
        };


        //////////////// 자동스크롤 구현 ////////////////////
        $(document).on("mousewheel DOMMouseScroll",
            function (e) { // e - 이벤트 전달값
                // 광스크롤 금지 /////////
                if (prot_sc) return;
                prot_sc = 1; //잠금
                setTimeout(() => prot_sc = 0, dur_sc);
                //////////////////////////////
                //-> 지정시간동안 스크롤막기
                //-> 지정시간은 dur_sc 상수로 관리함!

                // e.preventDefault();
                // return false;
                // 스크롤막기를 쓰면 에러 나므로 
                // html,body에 overflow:hidden설정으로
                // 스크롤바를 숨기고 스크롤이 안되게 한다!!!

                // e 이벤트 전달변수 처리하기
                e = window.event || e;
                // 뒤의 값 2개중 유효값이 e에 재할당된다!
                // window.event 는 오리지널 이벤트임

                //***************************
                // 마우스 휠 방향 알아내기!
                // 휠델타값으로 방향을 알아낸다!
                // e.wheelDelta는 일반 브라우저용 방향정보
                // e.detail은 파이어폭스용 방향정보
                let delta = e.wheelDelta || e.detail;
                // console.log("휠델타값:" + delta);

                //********************************/
                // 방향에 따른 페이지 번호증감하기 ////
                if (delta < 0) { // 음수면 스크롤 아랫방향(다음페이지)
                    pno++;
                    if (pno === totnum) pno = totnum - 1; //끝번호에 고정
                } //////// if ////////////
                else { // 양수면 스크롤 윗방향(이전페이지)
                    pno--;
                    if (pno === -1) pno = 0; //첫번호에 고정
                } //////// else //////////


                // 페이지 번호에 따른 회전 각도 설정
                rotationAngle = pageRotationConfig[pno].angle; // 페이지에 맞는 회전 각도 설정

                // 각도 변경: model-viewer의 camera-orbit을 설정
                $("model-viewer").attr("camera-orbit", `${rotationAngle}deg 75deg 100%`);

                // 페이지 번호에 맞춰 애니메이션 변경
                let logoStyles = pageStyleConfig[pno].logo;
                let squareStyles = pageStyleConfig[pno].square;
                let carStyles = pageStyleConfig[pno].car;
                let p9cStyles = pageStyleConfig[pno].p9c;
                let pg2textStyles = pageStyleConfig[pno].pg2text;
                let dtiBoxStyles = pageStyleConfig[pno].dtiBox;
                let pg3_1textStyles = pageStyleConfig[pno].pg3_1text;
                let pg3_2textStyles = pageStyleConfig[pno].pg3_2text;
                let pg3_3textStyles = pageStyleConfig[pno].pg3_3text;
                let d1Styles = pageStyleConfig[pno].d1;
                let d2Styles = pageStyleConfig[pno].d2;
                let d3Styles = pageStyleConfig[pno].d3;
                let pg4textStyles = pageStyleConfig[pno].pg4text;

                // logo 애니메이션
                $(".logo").stop().animate({
                    width: logoStyles.width,
                    height: logoStyles.height,
                    top: logoStyles.top,
                    left: logoStyles.left,
                }, dur_sc, easing_sc);

                // square 애니메이션
                $(".square").stop().animate({
                    width: squareStyles.width,
                    height: squareStyles.height,
                    top: squareStyles.top,
                    left: squareStyles.left,
                }, dur_sc, easing_sc);

                // car 애니메이션
                $(".car").stop().animate({
                    width: carStyles.width,
                    height: carStyles.height,
                    top: carStyles.top,
                    left: carStyles.left,
                }, dur_sc, easing_sc);

                // p9c 애니메이션
                $(".p9c").stop().animate({
                    width: p9cStyles.width,
                    height: p9cStyles.height,
                    top: p9cStyles.top,
                    left: p9cStyles.left,
                    fontSize: p9cStyles.fontSize,
                    color: p9cStyles.color
                }, dur_sc, easing_sc);

                // jQuery에서는 text-decoration 지원x
                $(".p9c").css({
                    textDecorationLine: p9cStyles.textDecorationLine,
                    textDecorationColor: p9cStyles.textDecorationColor,
                    textDecorationThickness: p9cStyles.textDecorationThickness,
                    textUnderlineOffset: p9cStyles.textUnderlineOffset
                });

                // pg2text 애니메이션
                $(".pg2text").stop().animate({
                    width: pg2textStyles.width,
                    height: pg2textStyles.height,
                    top: pg2textStyles.top,
                    left: pg2textStyles.left,
                }, dur_sc, easing_sc);

                // dtiBox 애니메이션
                $(".dtibox").stop().animate({
                    width: dtiBoxStyles.width,
                    height: dtiBoxStyles.height,
                    top: dtiBoxStyles.top,
                    left: dtiBoxStyles.left,
                }, dur_sc, easing_sc);

                // pg3_1text 애니메이션
                $(".pg3_1text").stop().animate({
                    width: pg3_1textStyles.width,
                    height: pg3_1textStyles.height,
                    top: pg3_1textStyles.top,
                    left: pg3_1textStyles.left,
                }, dur_sc, easing_sc);

                // pg3_2text 애니메이션
                $(".pg3_2text").stop().animate({
                    width: pg3_2textStyles.width,
                    height: pg3_2textStyles.height,
                    top: pg3_2textStyles.top,
                    right: pg3_2textStyles.right,
                }, dur_sc, easing_sc);
                // pg3_1text 애니메이션

                $(".pg3_3text").stop().animate({
                    width: pg3_3textStyles.width,
                    height: pg3_3textStyles.height,
                    top: pg3_3textStyles.top,
                    right: pg3_3textStyles.right,
                }, dur_sc, easing_sc);

                // d1 애니메이션
                $(".d1").stop().animate({
                    width: d1Styles.width,
                    height: d1Styles.height,
                    top: d1Styles.top,
                    left: d1Styles.left,
                }, dur_sc, easing_sc);

                // d2 애니메이션
                $(".d2").stop().animate({
                    width: d2Styles.width,
                    height: d2Styles.height,
                    top: d2Styles.top,
                    left: d2Styles.left,
                }, dur_sc, easing_sc);

                // d3 애니메이션
                $(".d3").stop().animate({
                    width: d3Styles.width,
                    height: d3Styles.height,
                    top: d3Styles.top,
                    left: d3Styles.left,
                }, dur_sc, easing_sc);

                // pg4text 애니메이션
                $(".pg4text").stop().animate({
                    width: pg4textStyles.width,
                    height: pg4textStyles.height,
                    top: pg4textStyles.top,
                    right: pg4textStyles.right,
                }, dur_sc, easing_sc);

                //***************************
                // 페이지번호를 높이값에 곱하여 스크롤 이동하기
                // 이동높이값
                let pos = $(window).height() * pno;
                // console.log("이동값:", pos);
                // 이동애니메이션
                $("html,body").animate({
                    scrollTop: pos + "px"
                }, dur_sc, easing_sc);
                // dur_sc 상수에 공통시간설정


            }); //////////// mousewheel
    }); ////////////// jQB
});
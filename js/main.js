window.addEventListener("DOMContentLoaded", () => {
    console.log("ready");

    let pno = 0;
    // 전체 페이지수
    const totnum = 7;
    // 광스크롤 상태변수
    let prot_sc = 0; //0-허용, 1-불허용
    // 스크롤애니메이션 시간
    const dur_sc = 700;
    // 스크롤이징
    const easing_sc = "easeInOutQuint";
    ///////////////////////////////////////////////////

    $(function () { ////// jQB //////////////////////
        let rotationAngle = 0; // 회전 각도를 저장하는 변수
        const pageRotationConfig = { // 각 페이지회전 각도설정
            0: {
                angle: 0
            }, // 첫 페이지
            1: {
                angle: 90
            }, // 두 번째 페이지
            2: {
                angle: 50
            }, // 세 번째 페이지
            3: {
                angle: 180
            }, // 네 번째 페이지
            4: {
                angle: 230
            }, // 다섯 번째 페이지
            5: {
                angle: 180
            }, // 여섯 번째 페이지
            6: {
                angle: 180
            } // 일곱 번째 페이지
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
            /////////////////////////////////////////////////////
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
                    transform: 'translateX(-50%)',                textDecorationLine: 'none',
                    color: 'rgb(58, 55, 56)'
                },
                text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '100%',
                    left: '50%'
                },
                ////////////////////////////////////////////////////////
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
                    textDecorationLine: 'underline',
                    textDecorationColor: 'rgb(255, 218, 91)',
                    textDecorationThickness: '5px',
                    textUnderlineOffset: '25px'
                },
                text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '27%',
                    left: '50%'
                },






                
                ////////////////////////////////////////////////////////
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
                    top: '20%',
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
                text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '100%',
                    left: '50%'
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
                    left: '15%'
                },
                car: {
                    width: '1000px',
                    height: '1000px',
                    top: '15%',
                    left: '20%'
                },
                p9c: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '90px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#fff',
                    fontSize: '8vw',
                    textDecorationLine: 'underline',
                    textDecorationColor: 'rgb(255, 218, 91)',
                    textDecorationThickness: '5px',
                    textUnderlineOffset: '25px'

                },
                text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '100%',
                    left: '50%'

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
                    top: '5%',
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

                text: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '100%',
                    left: '50%'

                },


            },

            6: {

                logo: {
                    width: '79.375px',
                    height: '87.5px',
                    top: '10%',
                    left: '105%'

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
                p9c: {
                    width: 'fit-content',
                    height: 'fit-content',
                    top: '90px',
                    left: '-25%',
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
                let textStyles = pageStyleConfig[pno].text;

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

                // text 애니메이션
                $(".text").stop().animate({
                    width: textStyles.width,
                    height: textStyles.height,
                    top: textStyles.top,
                    left: textStyles.left,
                }, dur_sc, easing_sc);

                // text 애니메이션
                $(".text").stop().animate({
                    width: textStyles.width,
                    height: textStyles.height,
                    top: textStyles.top,
                    left: textStyles.left,
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


            }); //////////// mousewheel //////////////////////
        ///////////////////////////////////////////////////

    }); ////////////// jQB /////////////////////////
    ////////////////////////////////////////////////

});
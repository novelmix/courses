$("#team li").each(function () {

    switch ($(this).attr("id")) {
        case "nav-li-linux":
            $(this).hover(
                // function () {
                //     $("#text-logo").text("cd linux");
                // },
                function () {
                    $("#text-logo").stop().css("opacity", "0").html(function () {
                        return "cd linux"
                    }).animate({
                        opacity: 1
                    }, 500);
                },
                function () {
                    $("#text-logo").text("");
                });
            break;
        case "nav-li-git":
            $(this).hover(
                function () {
                    $("#text-logo").stop().css("opacity", "0").html(function () {
                        return "cd git"
                    }).animate({
                        opacity: 1
                    }, 500);
                },
                function () {
                    $("#text-logo").text("");
                }
            );
            break;
        case "nav-li-css":
            $(this).hover(
                function () {
                    $("#text-logo").stop().css("opacity", "0").html(function () {
                        return "cd css"
                    }).animate({
                        opacity: 1
                    }, 500);
                },
                function () {
                    $("#text-logo").text("");
                }
            );
            break;
        case "nav-li-html":
            $(this).hover(
                function () {
                    $("#text-logo").stop().css("opacity", "0").html(function () {
                        return "cd html"
                    }).animate({
                        opacity: 1
                    }, 500);
                },
                function () {
                    $("#text-logo").text("");
                }
            );
            break;
        case "nav-li-me":
            $(this).hover(
                function () {
                    $("#text-logo").stop().css("opacity", "0").html(function () {
                        return "cd me"
                    }).animate({
                        opacity: 1
                    }, 500);
                },
                function () {
                    $("#text-logo").text("");
                }
            );
            break;
        default:
    }
});
$(".container-linux-distributions div").each(function () {
    switch ($(this).attr("id")) {
        case "ubuntu":
            $(this).hover(
                function () {
                    $("#name-linux").text("1. UBUNTU");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "debian":
            $(this).hover(
                function () {
                    $("#name-linux").text("2. DEBIAN");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "centos":
            $(this).hover(
                function () {
                    $("#name-linux").text("3. CENTOS");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "astra":
            $(this).hover(
                function () {
                    $("#name-linux").text("4. ASTRA LINUX");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "mint":
            $(this).hover(
                function () {
                    $("#name-linux").text("5. LINUX MINT");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "kali":
            $(this).hover(
                function () {
                    $("#name-linux").text("6. KALI LINUX");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "fedora":
            $(this).hover(
                function () {
                    $("#name-linux").text("7. FEDORA");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "manjaro":
            $(this).hover(
                function () {
                    $("#name-linux").text("8. MANJARO");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "opensuse":
            $(this).hover(
                function () {
                    $("#name-linux").text("9. OPENSUSE");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        case "arch":
            $(this).hover(
                function () {
                    $("#name-linux").text("10. ARCH LINUX");
                },
                function () {
                    $("#name-linux").text("");
                });
            break;
        default:
    }
});
$(function() {

    // 轮播效果
    $('.flexslider').flexslider({
        animation: "slide",
        direction: "horizontal",
        easing: "swing"
    });
    
    // 产业链金融
    var industry_chain = $('.industry-chain');
    industry_chain.each(function() {
        $(this).click(function() {
            location.href = './html/service-content.html?flag=system&id=item3&index=0'
        });
    })
    // 信贷风控
    var risk_manage = $('.risk-manage');
    risk_manage.each(function() {
        $(this).click(function() {
            location.href = './html/service-content.html?flag=system&id=item3&index=1'
        });
    })
    // 信贷管理
    var loan_manage = $('.loan-manage');
    loan_manage.each(function() {
        $(this).click(function() {
            location.href = './html/service-content.html?flag=system&id=item3&index=2'
        });
    })
    // 互联网金融
    var financial_net = $('.financial-net');
    financial_net.each(function() {
        $(this).click(function() {
            location.href = './html/service-content.html?flag=system&id=item3&index=3'
        });
    })
    // 业务辅助
    var business_assist = $('.business-assist');
    business_assist.each(function() {
        $(this).click(function() {
            location.href = './html/service-content.html?flag=system&id=item3&index=4'
        });
    })
    // 人力管理
    var human_test = $('.human-test');
    human_test.each(function() {
        $(this).click(function() {
            location.href = './html/service-content.html?flag=system&id=item3&index=5'
        });
    })
})
package com.sist.boot_0306.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.sist.boot_0306.service.BbsService;
import com.sist.boot_0306.service.CommService;
import com.sist.boot_0306.util.Paging;
import com.sist.boot_0306.vo.BbsVO;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@RequestMapping("/board")
public class BbsController {
    
    @Autowired
    private BbsService bbsService;

    @RequestMapping(value = "/list")
    @ResponseBody //JSON으로 반환받기 위한 ResponseBody
    //JSON은 Map형태로 받아지니 메서드의 자료형은 Map
    public Map<String, Object> getList(@RequestParam String bname,
    String searchType, String searchValue, String cPage) {
        //먼저 기본페이지값을 1로 지정
        int nowPage = 1;

        //cPage라는 파라미터가 비어있지 않다면 사용자가 보고싶은 페이지를
        //보내줬기 때문에 NowPage를 cPage값으로 변경.
        if (cPage != null)
            nowPage = Integer.parseInt(cPage);
        
        //bname이 무조건 인자로 받기로 되어있지만, 공백일 수 도 있으니,
        //검증 과정을 거쳐 기본값을 지정해준다.
        if (bname.trim().length() == 0)
            bname = "BBS";
        
        //전체 게시물의 수를 구한다.
        int totalCount = bbsService.getTotalCount(
                bname, searchType, searchValue);

        //페이징기법에 사용될 변수들을 모두 가지고 있는 객체 생성.
        Paging page = new Paging(7, 5);
        page.setTotalRecord(totalCount);// 총 게시물 수 지정
        page.setNowPage(nowPage);// 현재 페이지 지정

        int begin = page.getBegin();
        int end = page.getEnd();

        //표현할 게시물들을 나타냄
        BbsVO[] ar = bbsService.getList(
                bname, searchType, searchValue, begin, end);

        Map<String, Object> map = new HashMap<>();
        map.put("ar", ar);
        map.put("page", page);
        map.put("bname", bname);
        map.put("totalCount", totalCount);
        map.put("nowPage", nowPage);
        map.put("totalPage", page.getTotalPage());// 전체페이지 수
        return map;
    }
    @RequestMapping("/getBbs")
    public Map<String,Object> getBbs(@RequestParam String b_idx) {
        Map<String,Object> map = new HashMap<>();

        BbsVO vo = bbsService.getBbs(b_idx);
        map.put("vo", vo);

        return map;
    }
    
}

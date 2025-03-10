package com.sist.jwt_0310.domain.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.jwt_0310.domain.bbs.entity.Bbs;
import com.sist.jwt_0310.domain.bbs.entity.service.BbsService;
import com.sist.jwt_0310.global.jpa.BaseEntity;
import com.sist.jwt_0310.global.result.ResultData;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/bbs")
@CrossOrigin(origins = "http://localhost:3000")
public class ApiV1BbsController {
    private final BbsService bbsService;

    @GetMapping("")
    //JSON으로 받을때는 List로 받고 그안에 제네릭 타입을 bbs를 사용한다.
    public ResultData<List<Bbs>> getList() {
        List<Bbs> list = bbsService.getList();
        String msg = "fail";
        if(list != null && list.size() > 0)
            msg = "success";
        //static으로 of라는 메서드를 만들어놨기 때문에 new를 통해 생성할 필요가없음.
        return ResultData.of(list.size(), msg, list);
    }
    
    // 기본키를 인자로 받아서 Bbs객체를 검색하여 반환하는 기능.
    @GetMapping("/{b_idx}")
    //b_idx 인자값을 GetMapping에 써져있는 b_idx에서 사용하겠다는 의미인 어노테이션 사용.
    public ResultData<Bbs> getBbs(@PathVariable("b_idx") Long b_idx) {
        
        /* 
        ResultData<Bbs> rd = null;
        Optional<Bbs> opt = bbsService.getBbs(b_idx);
        int cnt = 0;
        String msg = "fail";
        Bbs data = null;
        if(opt.isEmpty()) {
            //정보가 없는 경우
            cnt = 1;
            msg = "success";
            data = opt.get();
        } 
        return ResultData.of(cnt, msg, data); 
        */
        // ---------------------------------------------------------------------------

        //여기서 map은 Optional객체의 값을 반환해주는 역할을 함.
        // 해당 map은 Optional이 가지고있는 map이다.
        // getBbs가 반환하는 값이 Optional이 비어있지 않다면, map안에 정의된 ResultData를 반환한다.
        return bbsService.getBbs(b_idx).map(
            // Optional이 갖고있는 값을 bbs에게 전달함.
            // 있으면 map안에 있는 객체를줌. 그래서 data부분에 bbs를 사용함.
            // if else와 같다.
            bbs -> ResultData.of(1, "success", bbs)
        ).orElseGet(
            () -> ResultData.of(0, "fail", null)
        );
    }

    
}

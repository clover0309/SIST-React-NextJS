package com.sist.jwt_0310.global.result;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
//타입을 지정하는 제네릭 타입 추가
public class ResultData<T> {

    private int totalCount;
    private String msg;
    private T data;

    //of라는 인자앞에 파라미터 값을 넣으면 ResultData에 해당 값을 포함하여 ResultData를 생성한다.
    public static<T> ResultData<T> of(int totalCount, String msg, T data) {
        return new ResultData<>(totalCount, msg, data);
    }

    //of라는 인자앞에 파라미터 값을 넣으면 ResultData에 해당 값을 포함하여 ResultData를 생성한다.
    //메서드 오버로딩을 통하여 사용한다.
    public static<T> ResultData<T> of(int totalCount, String msg) {
        return of(totalCount, msg, null);
    }
}

package com.ureca.person.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ureca.person.dto.Person;
import com.ureca.person.model.service.PersonService;

import jakarta.servlet.http.HttpServletRequest;

//@Controller //스프링 컨테이너로 객체 관리 받고 싶어요!!
@RestController //==> 클래스 내의 모든 메서드는 리턴 데이터라는 것을 명시!!
@RequestMapping("/person")
@CrossOrigin("*")
public class PersonController {
	
	@Autowired
	PersonService service;//service=null;기본값	

	@PostMapping("/form")
//	@ResponseBody
	public String regist(@RequestBody Person person) throws SQLException {//DB입력
		//@RequestBody==>  JSON(자바스크립트객체)을 DTO(자바객체)로 변경 
		
		service.add(person);//3.
		return "SUCCESS";  // 5.	
	}
	
	@GetMapping("/list") //1.
//	@ResponseBody //==>JSP페이지가 아닌 데이터를 리턴하고 싶습니다
	public List<Person> list() throws SQLException { //DB목록출력
		System.out.println("list서비스 준비완료!!");
		return service.readAll();  //5.
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//DB조회 : 수정폼에 출력할 데이터 조회
	@GetMapping("/upform")//  localhost:8080/person/upform?no=3
	public Person upform(@RequestParam("no") int no) throws SQLException {//수정폼 보이기
	    System.out.println("수정폼 조회 요청!!"+service.read(no));
		return service.read(no);
	}
	
	@PutMapping("/upform")
	public int modify(@RequestBody Person person) throws SQLException {//DB수정 요청
		return service.edit(person);
	} 

	
	@GetMapping("/delete")//  localhost:8080/person/delete?no=3
	public String remove(@RequestParam("no") int no) {//DB삭제 요청
		try {
			service.remove(no);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return "redirect:list";//삭제 결과를 list페이지로 확인
	}
	
	
	
	
}






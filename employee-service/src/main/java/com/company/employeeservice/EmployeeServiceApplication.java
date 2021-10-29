package com.company.employeeservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


//@EnableDiscoveryClient annotation has been added in the main spring boot configuration class to make the service as a Discoverable client. ...
// @EnableDiscoveryClient annotation can work with any Discovery Client implementations which implements in your project ( Eureka, Consul, Zookeeper )

//Spring Boot @SpringBootApplication annotation is used to mark a configuration class that declares one or more @Bean methods and also triggers auto-configuration and component scanning.
// It's same as declaring a class with @Configuration, @EnableAutoConfiguration and @ComponentScan annotations.

// to enable a host of features, e.g. Java-based Spring configuration, component scanning, and in particular for enabling Spring Boot's auto-configuration feature
@SpringBootApplication
@EnableDiscoveryClient
public class EmployeeServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeServiceApplication.class, args);
	}

}

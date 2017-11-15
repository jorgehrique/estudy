package com.estudy.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/Teste")
public class TesteResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getTeste(){
		return "Teste OK!";
	}
	
}

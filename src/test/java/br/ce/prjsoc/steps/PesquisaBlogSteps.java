package br.ce.prjsoc.steps;

import java.io.File;
import java.io.IOException;

import org.junit.Assert;
import org.junit.validator.PublicClassValidator;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.sun.jna.platform.FileUtils;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PesquisaBlogSteps {

	private WebDriver driver;

	@Given("^estou acessando o blog da soc$")
	public void estou_acessando_o_blog_da_soc() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Gio e Quel\\Desktop\\driver\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.soc.com.br/blog/");
	}

	@When("^digitar trabalhe conosco na barra de pesquisa$")
	public void digitar_trabalhe_conosco_na_barra_de_pesquisa() throws Throwable {
		driver.findElement(By.xpath(
				"/html/body/div[2]/div/div/section[1]/div/div/div/div/div/section[2]/div/div/div[2]/div/div/div/div/form/div/input"))
				.sendKeys("Trabalhe Conosco");

	}

	@When("^clicar no botao pesquisar$")
	public void clicar_no_botao_pesquisar() throws Throwable {
		driver.findElement(By.tagName("button")).click();
	}

	@Then("^o trabalhe conosco ira aparecer$")
	public void o_trabalhe_conosco_ira_aparecer() throws Throwable {
		String texto = driver.findElement(By.xpath(
				"/html/body/div[2]/div/section[1]/div/div/div/div/div/section/div/div/div/div/div/div[2]/div/h2"))
				.getText();
		Assert.assertEquals("Search Results for: Trabalhe Conosco", texto);

	}

	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			org.apache.commons.io.FileUtils.copyFile(file, new File("target/screenshots" + cenario.getId() + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
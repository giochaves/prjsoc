package br.ce.prjsoc.steps;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PesquisaCredenciadoSteps {

	private WebDriver driver;

	@Given("^estou acessando o site da soc$")
	public void estou_acessando_o_site_da_soc() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\Gio e Quel\\Desktop\\driver\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.soc.com.br/");
	}

	@When("^clicar no botao solucoes$")
	public void clicar_no_botao_solucoes() throws Throwable {
		driver.findElement(By.xpath(
				"/html/body/div[1]/div/header[1]/div/div/div/div/div/section[2]/div/div/div/div/div/div[2]/div/nav[1]/ul/li[3]/a"))
				.click();
	}

	@When("^clicar no botao SOCNET$")
	public void clicar_no_botao_SOCNET() throws Throwable {
		driver.findElement(By.xpath(
				"/html/body/div[1]/div/header[1]/div/div/div/div/div/section[2]/div/div/div/div/div/div[2]/div/nav[1]/ul/li[3]/ul/li[7]/a"))
				.click();
	}

	@When("^clicar no botao buscar credenciados$")
	public void clicar_no_botao_buscar_credenciados() throws Throwable {
		driver.findElement(By.xpath(
				"/html/body/div[2]/div/div/section[1]/div/div/div/div/div/section/div/div/div/div/div/div[4]/div/div/a/span/span"))
				.click();
	}

	@When("^digitar Santos,SP,Brasil na barra de pesquisa$")
	public void digitar_Santos_SP_Brasil_na_barra_de_pesquisa() throws Throwable {

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.id("ipt-busca-credenciado-2")).sendKeys("Santos, SP, Brasil");
	}

	@When("^clicar no botao de busca$")
	public void clicar_no_botao_de_busca() throws Throwable {
		driver.findElement(By.xpath("/html/body/div/div/section[2]/div[1]/div[1]/form/button[2]")).click();
	}

	@When("^clicar no resultado MEDISOCIAL MEDICINA OCUPACIONAL S/S LTDA$")
	public void clicar_no_resultado_MEDISOCIAL_MEDICINA_OCUPACIONAL_S_S_LTDA() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("/html/body/div/div/section[2]/div[3]/div[1]/div")).click();
		
	}

	@Then("^exibir o perfil do credenciado$")
	public void exibir_o_perfil_do_credenciado() throws Throwable {
		driver.findElement(By.xpath("/html/body/div/div/section[2]/div[3]/div[1]/div/div[2]/div/section/div[2]/a/button")).click();
	}

	public void screenshot(Scenario cenario) {
		File file = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			org.apache.commons.io.FileUtils.copyFile(file, new File("target/screenshots" + cenario.getId() + ".jpg"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}

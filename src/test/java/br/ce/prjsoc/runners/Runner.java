package br.ce.prjsoc.runners;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			 features = "src/test/resources/features/PrjSoc.feature",
			 glue = "br.ce.prjsoc.steps",
			 monochrome = true,
			 snippets = SnippetType.CAMELCASE,
			 plugin = { "pretty", "html:target/report-html", "json:target/report-jason" }
			)
	public class Runner {

	}
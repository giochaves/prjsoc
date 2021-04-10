$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/PrjSoc.feature");
formatter.feature({
  "line": 1,
  "name": "Busca no blog",
  "description": "",
  "id": "busca-no-blog",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Deve fazer uma busca no blog da soc",
  "description": "",
  "id": "busca-no-blog;deve-fazer-uma-busca-no-blog-da-soc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "estou acessando o blog da soc",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "digitar trabalhe conosco na barra de pesquisa",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicar no botao pesquisar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "o trabalhe conosco ira aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "PesquisaBlogSteps.estou_acessando_o_blog_da_soc()"
});
formatter.result({
  "duration": 9703497100,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaBlogSteps.digitar_trabalhe_conosco_na_barra_de_pesquisa()"
});
formatter.result({
  "duration": 125665400,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaBlogSteps.clicar_no_botao_pesquisar()"
});
formatter.result({
  "duration": 2793403900,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaBlogSteps.o_trabalhe_conosco_ira_aparecer()"
});
formatter.result({
  "duration": 47944100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Deve fazer uma busca de credenciado",
  "description": "",
  "id": "busca-no-blog;deve-fazer-uma-busca-de-credenciado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "estou acessando o site da soc",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao solucoes",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao SOCNET",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "clicar no botao buscar credenciados",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "digitar Santos,SP,Brasil na barra de pesquisa",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao de busca",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "clicar no resultado MEDISOCIAL MEDICINA OCUPACIONAL S/S LTDA",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "exibir o perfil do credenciado",
  "keyword": "Then "
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.estou_acessando_o_site_da_soc()"
});
formatter.result({
  "duration": 8744037600,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.clicar_no_botao_solucoes()"
});
formatter.result({
  "duration": 292189000,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.clicar_no_botao_SOCNET()"
});
formatter.result({
  "duration": 2721210800,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.clicar_no_botao_buscar_credenciados()"
});
formatter.result({
  "duration": 594288800,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.digitar_Santos_SP_Brasil_na_barra_de_pesquisa()"
});
formatter.result({
  "duration": 25577050100,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.clicar_no_botao_de_busca()"
});
formatter.result({
  "duration": 286755900,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.clicar_no_resultado_MEDISOCIAL_MEDICINA_OCUPACIONAL_S_S_LTDA()"
});
formatter.result({
  "duration": 1929978500,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaCredenciadoSteps.exibir_o_perfil_do_credenciado()"
});
formatter.result({
  "duration": 48867700,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003cbutton class\u003d\"center btn-estreito\" type\u003d\"button\"\u003e could not be scrolled into view\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-K3DKAAA\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\Gio e Quel\\AppData\\Local\\Temp\\rust_mozprofilea7JlQA, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.29.0, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d85.0.2, moz:shutdownTimeout\u003d60000.0, platformVersion\u003d10.0, moz:processID\u003d1916.0, browserName\u003dfirefox, moz:buildID\u003d20210208133944, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: 04899eba-ef3f-462c-8da3-1e9d77b4091a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat br.ce.prjsoc.steps.PesquisaCredenciadoSteps.exibir_o_perfil_do_credenciado(PesquisaCredenciadoSteps.java:74)\r\n\tat ✽.Then exibir o perfil do credenciado(src/test/resources/features/PrjSoc.feature:19)\r\n",
  "status": "failed"
});
});
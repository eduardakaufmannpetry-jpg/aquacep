<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="AquaCEP - Projeto interdisciplinar de Física: É possível aquecer a piscina da escola com energia solar? Análise técnica, cálculos e proposta de maquete.">
<meta name="author" content="AquaCEP - Equipe Pedagógica de Ciências">
<title>AquaCEP — Aquecimento Solar da Piscina da Escola</title>
<style>
  :root{
    --cor-primaria:#0b5394;
    --cor-secundaria:#f39c12;
    --cor-destaque:#d35400;
    --cor-texto:#1a1a1a;
    --cor-fundo:#fdfdfd;
    --cor-fundo-alt:#eef4fa;
    --cor-borda:#0b5394;
    --foco:#ff6b00;
    --espaco:1rem;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;font-size:100%}
  body{
    font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    line-height:1.7;
    color:var(--cor-texto);
    background:var(--cor-fundo);
    max-width:1100px;
    margin:0 auto;
    padding:1rem;
  }
  /* Skip link para acessibilidade */
  .skip-link{
    position:absolute;
    left:-9999px;
    top:0;
    background:var(--cor-primaria);
    color:#fff;
    padding:.8rem 1.2rem;
    z-index:1000;
    font-weight:bold;
    text-decoration:none;
  }
  .skip-link:focus{left:0}
  /* Foco visível */
  a:focus, button:focus, [tabindex]:focus, input:focus, select:focus{
    outline:3px solid var(--foco);
    outline-offset:2px;
  }
  header{
    background:linear-gradient(135deg,var(--cor-primaria),#1e88e5);
    color:#fff;
    padding:2rem 1.5rem;
    border-radius:12px;
    margin-bottom:2rem;
    box-shadow:0 4px 10px rgba(0,0,0,.15);
    display:flex;
    align-items:center;
    gap:1.5rem;
    flex-wrap:wrap;
  }
  .logo-aquacep{
    background:#fff;
    color:var(--cor-primaria);
    padding:1rem 1.5rem;
    border-radius:50px;
    font-weight:bold;
    font-size:1.8rem;
    box-shadow:0 2px 8px rgba(0,0,0,.2);
    display:flex;
    align-items:center;
    gap:.5rem;
  }
  .logo-aquacep::before{
    content:"💧";
    font-size:2rem;
  }
  header .header-content{
    flex:1;
    min-width:250px;
  }
  header h1{font-size:clamp(1.6rem,3vw,2.4rem);margin-bottom:.5rem}
  header p{font-size:1.05rem;opacity:.95}
  nav{
    background:var(--cor-fundo-alt);
    padding:1rem;
    border-radius:10px;
    margin-bottom:2rem;
    border-left:5px solid var(--cor-secundaria);
  }
  nav h2{font-size:1.2rem;margin-bottom:.8rem;color:var(--cor-primaria)}
  nav ol{padding-left:1.5rem}
  nav li{margin:.4rem 0}
  nav a{color:var(--cor-primaria);font-weight:600;text-decoration:underline}
  nav a:hover{color:var(--cor-destaque)}
  main section{
    background:#fff;
    padding:1.8rem;
    margin-bottom:1.8rem;
    border-radius:10px;
    border:1px solid #d9e3ec;
    box-shadow:0 2px 6px rgba(0,0,0,.05);
  }
  h2{
    color:var(--cor-primaria);
    font-size:1.6rem;
    margin-bottom:1rem;
    padding-bottom:.4rem;
    border-bottom:3px solid var(--cor-secundaria);
  }
  h3{
    color:var(--cor-destaque);
    margin:1.2rem 0 .6rem;
    font-size:1.25rem;
  }
  h4{color:var(--cor-primaria);margin:.8rem 0 .4rem;font-size:1.05rem}
  p{margin-bottom:.9rem;text-align:justify}
  ul,ol{margin:.6rem 0 1rem 1.5rem}
  li{margin-bottom:.4rem}
  /* Tabela acessível */
  table{
    width:100%;
    border-collapse:collapse;
    margin:1rem 0;
    font-size:.95rem;
  }
  caption{
    font-weight:bold;
    margin-bottom:.5rem;
    text-align:left;
    color:var(--cor-primaria);
  }
  th,td{
    border:1px solid #b8c7d6;
    padding:.7rem;
    text-align:left;
    vertical-align:top;
  }
  th{background:var(--cor-primaria);color:#fff;font-weight:600}
  tbody tr:nth-child(even){background:var(--cor-fundo-alt)}
  /* Fórmula destacada */
  .formula{
    background:#fff8e1;
    border-left:5px solid var(--cor-secundaria);
    padding:1rem 1.2rem;
    margin:1rem 0;
    font-family:'Courier New',monospace;
    font-size:1.05rem;
    border-radius:6px;
    overflow-x:auto;
  }
  .formula strong{color:var(--cor-destaque)}
  /* Caixa informativa */
  .info-box{
    background:#e3f2fd;
    border:2px solid var(--cor-primaria);
    padding:1rem 1.2rem;
    border-radius:8px;
    margin:1rem 0;
  }
  .info-box strong{color:var(--cor-primaria)}
  .aviso-box{
    background:#fff3e0;
    border:2px solid var(--cor-destaque);
    padding:1rem 1.2rem;
    border-radius:8px;
    margin:1rem 0;
  }
  /* Detalhes expansíveis */
  details{
    background:var(--cor-fundo-alt);
    padding:.8rem 1rem;
    border-radius:8px;
    margin:.8rem 0;
    border:1px solid #c9d6e3;
  }
  details summary{
    cursor:pointer;
    font-weight:bold;
    color:var(--cor-primaria);
    padding:.3rem 0;
  }
  details[open] summary{margin-bottom:.6rem}
  /* Calculadora */
  .calc{
    background:#f1f8e9;
    padding:1.2rem;
    border-radius:10px;
    border:2px solid #7cb342;
    margin:1rem 0;
  }
  .calc label{display:block;margin:.5rem 0 .3rem;font-weight:600}
  .calc input{
    width:100%;
    padding:.6rem;
    border:2px solid #7cb342;
    border-radius:6px;
    font-size:1rem;
    margin-bottom:.5rem;
  }
  .calc button{
    background:var(--cor-primaria);
    color:#fff;
    border:none;
    padding:.8rem 1.5rem;
    border-radius:6px;
    font-size:1rem;
    font-weight:bold;
    cursor:pointer;
    margin-top:.5rem;
  }
  .calc button:hover{background:var(--cor-destaque)}
  .resultado{
    margin-top:1rem;
    padding:1rem;
    background:#fff;
    border-left:5px solid var(--cor-secundaria);
    border-radius:6px;
    font-weight:bold;
    min-height:1.5rem;
  }
  /* Maquete */
  .maquete{
    background:linear-gradient(135deg,#fff8e1,#ffe0b2);
    padding:1.2rem;
    border-radius:10px;
    border:2px dashed var(--cor-destaque);
    margin:1rem 0;
  }
  /* Controles de acessibilidade */
  .acessibilidade{
    position:fixed;
    bottom:20px;
    right:20px;
    background:var(--cor-primaria);
    padding:.5rem;
    border-radius:50px;
    box-shadow:0 4px 10px rgba(0,0,0,.3);
    z-index:999;
  }
  .acessibilidade button{
    background:var(--cor-secundaria);
    color:#fff;
    border:none;
    width:45px;
    height:45px;
    border-radius:50%;
    font-size:1.2rem;
    font-weight:bold;
    cursor:pointer;
    margin:0 2px;
  }
  .acessibilidade button:hover{background:var(--cor-destaque)}
  /* Alto contraste */
  body.alto-contraste{
    background:#000;
    color:#fff;
  }
  body.alto-contraste section,
  body.alto-contraste header,
  body.alto-contraste nav,
  body.alto-contraste details,
  body.alto-contraste .calc,
  body.alto-contraste .maquete,
  body.alto-contraste .info-box,
  body.alto-contraste .aviso-box{
    background:#000;
    color:#fff;
    border-color:#fff;
  }
  body.alto-contraste h2,
  body.alto-contraste h3,
  body.alto-contraste h4,
  body.alto-contraste a,
  body.alto-contraste summary,
  body.alto-contraste caption{
    color:#ffeb3b;
  }
  body.alto-contraste th{background:#ffeb3b;color:#000}
  body.alto-contraste tbody tr:nth-child(even){background:#222}
  body.alto-contraste td,
  body.alto-contraste th{border-color:#fff}
  body.alto-contraste .logo-aquacep{
    background:#ffeb3b;
    color:#000;
  }
  /* Fonte grande */
  body.fonte-grande{font-size:125%}
  footer{
    text-align:center;
    padding:1.5rem;
    background:var(--cor-primaria);
    color:#fff;
    border-radius:10px;
    margin-top:2rem;
  }
  footer a{color:#ffeb3b}
  footer .footer-logo{
    font-size:1.5rem;
    font-weight:bold;
    margin-bottom:.5rem;
  }
  @media (max-width:600px){
    body{padding:.5rem}
    header,main section{padding:1rem}
    header{flex-direction:column;text-align:center}
    .logo-aquacep{font-size:1.5rem;padding:.8rem 1.2rem}
    table{font-size:.85rem}
    th,td{padding:.4rem}
  }
</style>
</head>
<body>

<a href="#conteudo-principal" class="skip-link">Pular para o conteúdo principal</a>

<header role="banner">
  <div class="logo-aquacep" aria-label="Logo AquaCEP">
    AquaCEP
  </div>
  <div class="header-content">
    <h1>☀️ É possível aquecer a piscina da escola com energia solar?</h1>
    <p><strong>Projeto interdisciplinar de Física e avaliação tecnológica</strong></p>
    <p><em>Data de referência: 18 de novembro de 2026</em></p>
  </div>
</header>

<nav aria-label="Sumário do projeto" role="navigation">
  <h2>📑 Sumário</h2>
  <ol>
    <li><a href="#introducao">Introdução e contexto</a></li>
    <li><a href="#termico-vs-fotovoltaico">Aquecimento térmico × Fotovoltaico</a></li>
    <li><a href="#vantagens-limitacoes">Vantagens e limitações</a></li>
    <li><a href="#fisica-envolvida">Física envolvida (termodinâmica)</a></li>
    <li><a href="#dados-necessarios">Dados necessários para o cálculo</a></li>
    <li><a href="#calculo-exemplo">Cálculo estimado (exemplo prático)</a></li>
    <li><a href="#calculadora">Calculadora interativa</a></li>
    <li><a href="#maquete">A maquete como solução</a></li>
    <li><a href="#conclusao">Conclusão e perguntas orientadoras</a></li>
    <li><a href="#referencias">Referências e recursos</a></li>
  </ol>
</nav>

<main id="conteudo-principal" role="main">

<section id="introducao" aria-labelledby="titulo-intro">
  <h2 id="titulo-intro">1. Introdução e contexto</h2>
  <p>Aquecer a piscina da escola com energia solar é um desafio <strong>tecnicamente viável</strong> e <strong>pedagogicamente rico</strong>. Ele integra conceitos de <em>termodinâmica</em>, <em>transferência de calor</em>, <em>eficiência energética</em> e <em>sustentabilidade</em>, permitindo aos estudantes analisar criticamente tecnologias reais.</p>
  <div class="info-box" role="note">
    <strong>💡 Por que este projeto?</strong>
    <p>Além de reduzir custos com energia elétrica ou gás, o projeto ensina a avaliar tecnologias sob múltiplas perspectivas: física, econômica, ambiental e social — competências centrais da BNCC para o Ensino Médio.</p>
  </div>
  <p>Para responder à pergunta central, precisamos entender <strong>dois tipos de energia solar</strong>, calcular a <strong>energia térmica necessária</strong> e analisar se a escola possui condições de instalar o sistema.</p>
</section>

<section id="termico-vs-fotovoltaico" aria-labelledby="titulo-comparacao">
  <h2 id="titulo-comparacao">2. Aquecimento solar térmico × Fotovoltaico</h2>
  <p>Embora ambos usem o Sol como fonte, os sistemas são <strong>fisicamente diferentes</strong>:</p>

  <table>
    <caption>Comparação entre os dois tipos de energia solar</caption>
    <thead>
      <tr>
        <th scope="col">Característica</th>
        <th scope="col">Solar Térmico</th>
        <th scope="col">Solar Fotovoltaico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Princípio físico</th>
        <td>Absorção de radiação e conversão em calor (efeito térmico)</td>
        <td>Efeito fotoelétrico: fótons geram corrente elétrica em células de silício</td>
      </tr>
      <tr>
        <th scope="row">Componente principal</th>
        <td>Coletor solar (placa preta com tubos de cobre)</td>
        <td>Módulo fotovoltaico (células de silício)</td>
      </tr>
      <tr>
        <th scope="row">Produto final</th>
        <td>Água quente (30°C a 70°C)</td>
        <td>Energia elétrica (corrente contínua)</td>
      </tr>
      <tr>
        <th scope="row">Eficiência típica</th>
        <td>50% a 80%</td>
        <td>15% a 22%</td>
      </tr>
      <tr>
        <th scope="row">Aplicação ideal para piscina</th>
        <td>✅ Direto: aquece a água da piscina</td>
        <td>⚠️ Indireto: alimenta bomba de calor elétrica</td>
      </tr>
      <tr>
        <th scope="row">Custo de instalação</th>
        <td>Moderado</td>
        <td>Alto (mas em queda)</td>
      </tr>
    </tbody>
  </table>

  <div class="info-box">
    <strong>🔬 Física por trás:</strong>
    <p><strong>Térmico:</strong> a placa escura absorve radiação infravermelha e visível, aquecendo um fluido (geralmente água com anticongelante) que circula por tubos e transfere calor à piscina por convecção.</p>
    <p><strong>Fotovoltaico:</strong> os fótons com energia maior que o <em>bandgap</em> do silício (≈1,1 eV) libertam elétrons, gerando corrente elétrica utilizável.</p>
  </div>
</section>

<section id="vantagens-limitacoes" aria-labelledby="titulo-vantagens">
  <h2 id="titulo-vantagens">3. Vantagens e limitações</h2>

  <h3>3.1 Sistema térmico</h3>
  <table>
    <caption>Vantagens e limitações do sistema térmico</caption>
    <thead>
      <tr><th scope="col">Vantagens ✅</th><th scope="col">Limitações ⚠️</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Alta eficiência (até 80%)</td>
        <td>Depende de dias ensolarados</td>
      </tr>
      <tr>
        <td>Aquece a água diretamente</td>
        <td>Requer reservatório térmico (boiler)</td>
      </tr>
      <tr>
        <td>Custo-benefício excelente para água quente</td>
        <td>Manutenção contra incrustações</td>
      </tr>
      <tr>
        <td>Vida útil longa (20+ anos)</td>
        <td>Pode superaquecer em dias muito quentes</td>
      </tr>
      <tr>
        <td>Tecnologia madura e disponível no Brasil</td>
        <td>Ocupa área no telhado</td>
      </tr>
    </tbody>
  </table>

  <h3>3.2 Sistema fotovoltaico</h3>
  <table>
    <caption>Vantagens e limitações do sistema fotovoltaico</caption>
    <thead>
      <tr><th scope="col">Vantagens ✅</th><th scope="col">Limitações ⚠️</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Gera eletricidade para toda a escola</td>
        <td>Baixa eficiência (15–22%)</td>
      </tr>
      <tr>
        <td>Funciona mesmo com luz difusa</td>
        <td>Requer inversor e bomba de calor</td>
      </tr>
      <tr>
        <td>Reduz conta de luz integralmente</td>
        <td>Custo inicial elevado</td>
      </tr>
      <tr>
        <td>Permite créditos de energia (net metering)</td>
        <td>Depende de irradiância local</td>
      </tr>
      <tr>
        <td>Manutenção mínima</td>
        <td>Requer espaço maior no telhado</td>
      </tr>
    </tbody>
  </table>

  <div class="aviso-box" role="alert">
    <strong>⚠️ Atenção:</strong> Para aquecer piscina, o sistema <strong>térmico é geralmente mais eficiente</strong>. O fotovoltaico só compensa se a escola também quiser reduzir o consumo elétrico geral.
  </div>
</section>

<section id="fisica-envolvida" aria-labelledby="titulo-fisica">
  <h2 id="titulo-fisica">4. Física envolvida</h2>

  <h3>4.1 Equação fundamental do calor</h3>
  <p>A energia necessária para aquecer a água da piscina é dada por:</p>
  <div class="formula" role="math" aria-label="Equação da quantidade de calor sensível">
    <strong>Q = m · c · ΔT</strong>
  </div>
  <p>Onde:</p>
  <ul>
    <li><strong>Q</strong> = calor necessário (em joules ou kWh)</li>
    <li><strong>m</strong> = massa de água (kg) — 1 litro ≈ 1 kg</li>
    <li><strong>c</strong> = calor específico da água = 4.186 J/(kg·°C) ou 1 kcal/(kg·°C)</li>
    <li><strong>ΔT</strong> = variação de temperatura desejada (°C)</li>
  </ul>

  <h3>4.2 Perdas térmicas</h3>
  <p>A piscina perde calor por três mecanismos:</p>
  <ol>
    <li><strong>Evaporação</strong> (principal causa — cerca de 70% das perdas)</li>
    <li><strong>Convecção</strong> com o ar</li>
    <li><strong>Radiação</strong> infravermelha para o ambiente</li>
    <li><strong>Condução</strong> pelas paredes (menor impacto)</li>
  </ol>

  <h3>4.3 Potência solar disponível</h3>
  <p>A irradiância solar média no Brasil varia entre <strong>4,0 e 6,5 kWh/m²/dia</strong> (chamado de HSP — Horas de Sol Pleno). Esse valor é essencial para dimensionar os coletores.</p>
</section>

<section id="dados-necessarios" aria-labelledby="titulo-dados">
  <h2 id="titulo-dados">5. Dados necessários para estimar a energia</h2>
  <p>Para um cálculo realista, precisamos coletar as seguintes informações:</p>

  <table>
    <caption>Dados técnicos necessários</caption>
    <thead>
      <tr><th scope="col">Categoria</th><th scope="col">Dado</th><th scope="col">Como obter</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Piscina</th>
        <td>Volume (m³ ou litros)</td>
        <td>Medir comprimento × largura × profundidade média</td>
      </tr>
      <tr>
        <th scope="row">Temperatura</th>
        <td>Temperatura atual da água</td>
        <td>Termômetro de piscina</td>
      </tr>
      <tr>
        <th scope="row">Temperatura</th>
        <td>Temperatura desejada (ex.: 28°C)</td>
        <td>Definição pedagógica / norma</td>
      </tr>
      <tr>
        <th scope="row">Clima</th>
        <td>Irradiância solar local (HSP)</td>
        <td>Crea/CRESEB ou Atlas Solarimétrico</td>
      </tr>
      <tr>
        <th scope="row">Clima</th>
        <td>Temperatura média do ar</td>
        <td>INMET / estação local</td>
      </tr>
      <tr>
        <th scope="row">Local</th>
        <td>Área disponível no telhado</td>
        <td>Medição in loco</td>
      </tr>
      <tr>
        <th scope="row">Local</th>
        <td>Orientação e inclinação</td>
        <td>Bússola e inclinação (ideal: Norte geográfico, inclinação ≈ latitude)</td>
      </tr>
      <tr>
        <th scope="row">Uso</th>
        <td>Horário de uso da piscina</td>
        <td>Grade curricular da escola</td>
      </tr>
      <tr>
        <th scope="row">Orçamento</th>
        <td>Valor disponível para investimento</td>
        <td>Gestão escolar / PDDE</td>
      </tr>
    </tbody>
  </table>
</section>

<section id="calculo-exemplo" aria-labelledby="titulo-exemplo">
  <h2 id="titulo-exemplo">6. Cálculo estimado — exemplo prático</h2>
  <p>Vamos simular uma piscina escolar típica:</p>

  <div class="info-box">
    <strong>📐 Dados da piscina simulada:</strong>
    <ul>
      <li>Dimensões: 10 m × 5 m × 1,2 m → <strong>Volume = 60 m³ = 60.000 L</strong></li>
      <li>Massa de água: <strong>m = 60.000 kg</strong></li>
      <li>Temperatura atual: 20°C</li>
      <li>Temperatura desejada: <strong>28°C → ΔT = 8°C</strong></li>
      <li>Local: São Paulo — HSP ≈ <strong>5,0 kWh/m²/dia</strong></li>
    </ul>
  </div>

  <h3>Passo 1 — Energia para aquecer</h3>
  <div class="formula">
    Q = 60.000 kg × 1 kcal/(kg·°C) × 8°C = <strong>480.000 kcal</strong><br>
    Convertendo: 480.000 kcal × 4.186 J/kcal ≈ 2.009.280 kJ<br>
    Em kWh: 2.009.280 / 3.600 ≈ <strong>558 kWh</strong>
  </div>

  <h3>Passo 2 — Considerando perdas</h3>
  <p>Adicionando ~30% de perdas (evaporação, convecção, noite):</p>
  <div class="formula">
    Q_total ≈ 558 × 1,3 ≈ <strong>725 kWh</strong>
  </div>

  <h3>Passo 3 — Dimensionamento dos coletores</h3>
  <p>Considerando coletor térmico com eficiência de 60%:</p>
  <div class="formula">
    Área = Q_total / (HSP × eficiência) = 725 / (5 × 0,6) ≈ <strong>242 m² de coletores</strong>
  </div>
  <p>Como regra prática: <strong>a área de coletores deve ser entre 40% e 80% da área da piscina</strong>, dependendo do clima. Para 50 m² de espelho d'água, precisaríamos de ~20–40 m² de coletores bem dimensionados (o cálculo acima considera o aquecimento inicial; a manutenção diária é menor).</p>

  <div class="aviso-box">
    <strong>⚠️ Observação importante:</strong> O cálculo acima é para o <em>aquecimento inicial</em>. Uma vez aquecida, a piscina precisa apenas de <strong>reposição de perdas</strong>, que é muito menor (cerca de 10–20% do volume/dia, dependendo da cobertura).
  </div>
</section>

<section id="calculadora" aria-labelledby="titulo-calc">
  <h2 id="titulo-calc">7. Calculadora interativa AquaCEP</h2>
  <p>Use esta ferramenta para estimar a energia necessária para a piscina da sua escola:</p>

  <div class="calc" role="form" aria-label="Calculadora de energia para aquecimento de piscina">
    <label for="comprimento">Comprimento da piscina (m):</label>
    <input type="number" id="comprimento" min="1" step="0.1" value="10" aria-describedby="desc-comp">

    <label for="largura">Largura da piscina (m):</label>
    <input type="number" id="largura" min="1" step="0.1" value="5">

    <label for="profundidade">Profundidade média (m):</label>
    <input type="number" id="profundidade" min="0.5" step="0.1" value="1.2">

    <label for="temp-atual">Temperatura atual da água (°C):</label>
    <input type="number" id="temp-atual" min="0" max="50" step="0.5" value="20">

    <label for="temp-desejada">Temperatura desejada (°C):</label>
    <input type="number" id="temp-desejada" min="0" max="50" step="0.5" value="28">

    <label for="hsp">Horas de Sol Pleno — HSP (kWh/m²/dia):</label>
    <input type="number" id="hsp" min="2" max="8" step="0.1" value="5.0">

    <button type="button" onclick="calcular()" aria-label="Calcular energia necessária">🔍 Calcular</button>

    <div class="resultado" id="resultado" role="status" aria-live="polite">
      Preencha os dados e clique em "Calcular".
    </div>
    <small id="desc-comp" style="display:block;margin-top:.5rem;color:#555">
      Os valores padrão correspondem a uma piscina escolar típica em São Paulo.
    </small>
  </div>
</section>

<section id="maquete" aria-labelledby="titulo-maquete">
  <h2 id="titulo-maquete">8. A maquete como solução</h2>
  <p>A maquete é uma <strong>representação física em escala</strong> que permite visualizar, testar e comunicar a solução antes da implementação real.</p>

  <div class="maquete">
    <h3>🏫 O que a maquete deve representar</h3>
    <ul>
      <li><strong>A escola:</strong> prédio, telhado, pátio</li>
      <li><strong>A piscina:</strong> em escala reduzida (ex.: 1:50)</li>
      <li><strong>Os coletores solares:</strong> posicionados no telhado com orientação Norte</li>
      <li><strong>A tubulação:</strong> conectando coletores → boiler → piscina</li>
      <li><strong>O reservatório térmico (boiler):</strong> local de armazenamento</li>
      <li><strong>Bomba de circulação:</strong> responsável pelo movimento da água</li>
      <li><strong>Cobertura da piscina:</strong> capa térmica para reduzir perdas</li>
    </ul>
  </div>

  <h3>8.1 Materiais sugeridos para a maquete</h3>
  <table>
    <caption>Materiais e suas representações</caption>
    <thead>
      <tr><th scope="col">Componente</th><th scope="col">Material sugerido</th><th scope="col">Justificativa</th></tr>
    </thead>
    <tbody>
      <tr><td>Prédio</td><td>Papelão, isopor ou MDF</td><td>Fácil de cortar e pintar</td></tr>
      <tr><td>Coletores solares</td><td>Papelão pintado de preto + canudos de refrigerante (tubos)</td><td>Simula absorção de calor</td></tr>
      <tr><td>Piscina</td><td>Plástico azul transparente ou acrílico</td><td>Permite ver a "água"</td></tr>
      <tr><td>Tubulação</td><td>Canudos ou fios de cobre</td><td>Mostra o circuito</td></tr>
      <tr><td>Boiler</td><td>Lata de alumínio pintada</td><td>Representa o reservatório</td></tr>
      <tr><td>Sol</td><td>Lâmpada LED amarela</td><td>Simula a radiação solar</td></tr>
    </tbody>
  </table>

  <h3>8.2 Como a maquete demonstra a solução</h3>
  <ol>
    <li><strong>Visualização espacial:</strong> mostra onde os coletores serão instalados e como se conectam à piscina.</li>
    <li><strong>Teste de conceito:</strong> pode-se usar uma lâmpada incandescente como "Sol" e medir a temperatura da água em miniatura com termômetro.</li>
    <li><strong>Comunicação:</strong> facilita a apresentação do projeto para a direção da escola, pais e comunidade.</li>
    <li><strong>Análise crítica:</strong> permite identificar problemas (sombra de árvores, orientação errada) antes da instalação real.</li>
  </ol>

  <details>
    <summary>🎥 Experimento prático com a maquete</summary>
    <p>Monte dois recipientes pequenos com água: um com um "coletor" (papelão preto com canudo) e outro sem. Exponha ambos à luz de uma lâmpada por 30 minutos e meça a temperatura. O recipiente com coletor deve apresentar temperatura significativamente maior — demonstrando o princípio físico da absorção térmica.</p>
  </details>
</section>

<section id="conclusao" aria-labelledby="titulo-conclusao">
  <h2 id="titulo-conclusao">9. Conclusão — respondendo às questões orientadoras</h2>

  <details open>
    <summary>❓ Qual é a diferença entre aquecimento solar térmico e fotovoltaico?</summary>
    <p>O <strong>térmico</strong> converte radiação solar diretamente em calor (usado para aquecer água), com eficiência de 50–80%. O <strong>fotovoltaico</strong> converte radiação em eletricidade por efeito fotoelétrico, com eficiência de 15–22%. Para piscinas, o térmico é mais direto e eficiente.</p>
  </details>

  <details open>
    <summary>❓ Quais são as vantagens e limitações de cada sistema?</summary>
    <p>Veja a seção 3 acima. Em resumo: o térmico é mais eficiente para água quente, mas depende de sol direto; o fotovoltaico é mais versátil (gera energia para toda a escola), mas tem menor eficiência e custo maior.</p>
  </details>

  <details open>
    <summary>❓ Que dados seriam necessários para estimar a energia para aquecer a piscina?</summary>
    <p>Volume da piscina, temperatura atual e desejada, irradiância solar local (HSP), área disponível no telhado, orientação/inclinação, perdas térmicas e orçamento disponível.</p>
  </details>

  <details open>
    <summary>❓ Como a maquete pode representar uma solução possível para a escola?</summary>
    <p>A maquete permite visualizar em escala o posicionamento dos coletores, a tubulação e a integração com o prédio. Facilita testes experimentais, comunicação do projeto e análise crítica antes da implementação real.</p>
  </details>

  <div class="info-box">
    <strong>✅ Resposta final:</strong>
    <p><strong>Sim, é possível aquecer a piscina da escola com energia solar</strong>, preferencialmente com sistema <strong>térmico</strong>. A viabilidade depende do dimensionamento correto (volume, irradiância, área de telhado) e de um investimento inicial que se paga em 3 a 7 anos pela economia na conta de energia.</p>
  </div>
</section>

<section id="referencias" aria-labelledby="titulo-ref">
  <h2 id="titulo-ref">10. Referências e recursos</h2>
  <ul>
    <li>BRASIL. <strong>Base Nacional Comum Curricular (BNCC)</strong>. Brasília: MEC, 2018.</li>
    <li>CRESEB — Centro de Referência para Energia Solar. <strong>Atlas de Irradiação Solar do Brasil</strong>.</li>
    <li>HINRICHS, R. A.; KRAINE, M. <strong>Energia e Meio Ambiente</strong>. São Paulo: Edgard Blücher.</li>
    <li>INMET — Instituto Nacional de Meteorologia. Dados climáticos.</li>
    <li>RAMOS, A. V. et al. <strong>Aquecimento Solar de Piscinas</strong>. Revista Brasileira de Ensino de Física.</li>
  </ul>

  <h3>🔗 Recursos online</h3>
  <ul>
    <li><a href="https://www.cresesb.cepel.br/" target="_blank" rel="noopener">CRESEB — Dados de irradiação solar</a></li>
    <li><a href="https://www.inmet.gov.br/" target="_blank" rel="noopener">INMET — Dados climáticos</a></li>
    <li><a href="https://portalbncc.mec.gov.br/" target="_blank" rel="noopener">BNCC — Base Nacional Comum Curricular</a></li>
  </ul>
</section>

</main>

<!-- Controles de acessibilidade -->
<div class="acessibilidade" role="toolbar" aria-label="Ferramentas de acessibilidade">
  <button type="button" onclick="aumentarFonte()" aria-label="Aumentar tamanho da fonte" title="Aumentar fonte">A+</button>
  <button type="button" onclick="diminuirFonte()" aria-label="Diminuir tamanho da fonte" title="Diminuir fonte">A−</button>
  <button type="button" onclick="alternarContraste()" aria-label="Alternar alto contraste" title="Alto contraste">🌓</button>
</div>

<footer role="contentinfo">
  <div class="footer-logo">💧 AquaCEP</div>
  <p><strong>Projeto Pedagógico de Física</strong> — Aquecimento Solar da Piscina Escolar</p>
  <p>Desenvolvido para fins educacionais · Novembro de 2026</p>
  <p>📧 Contato: <a href="mailto:contato@aquacep.edu.br">contato@aquacep.edu.br</a></p>
</footer>

<script>
  // Calculadora de energia
  function calcular(){
    try{
      const c = parseFloat(document.getElementById('comprimento').value);
      const l = parseFloat(document.getElementById('largura').value);
      const p = parseFloat(document.getElementById('profundidade').value);
      const tAtual = parseFloat(document.getElementById('temp-atual').value);
      const tDesej = parseFloat(document.getElementById('temp-desejada').value);
      const hsp = parseFloat(document.getElementById('hsp').value);

      if([c,l,p,tAtual,tDesej,hsp].some(v => isNaN(v) || v <= 0)){
        document.getElementById('resultado').textContent = '⚠️ Preencha todos os campos com valores válidos.';
        return;
      }
      if(tDesej <= tAtual){
        document.getElementById('resultado').textContent = '⚠️ A temperatura desejada deve ser maior que a atual.';
        return;
      }

      const volume = c * l * p; // m³
      const massa = volume * 1000; // kg
      const deltaT = tDesej - tAtual;
      const qKcal = massa * deltaT;
      const qKwh = (qKcal * 4186) / 3600000;
      const qComPerdas = qKwh * 1.3;
      const areaColetor = qComPerdas / (hsp * 0.6);

      const texto = `
        💧 Volume da piscina: ${volume.toFixed(1)} m³ (${(volume*1000).toFixed(0)} L)<br>
        🌡️ Variação de temperatura: ${deltaT.toFixed(1)} °C<br>
        🔥 Energia necessária (sem perdas): ${qKwh.toFixed(1)} kWh<br>
        📉 Energia com 30% de perdas: ${qComPerdas.toFixed(1)} kWh<br>
        ☀️ Área estimada de coletores (eficiência 60%): ${areaColetor.toFixed(1)} m²<br>
        💰 Economia mensal estimada (R$ 0,80/kWh): R$ ${(qComPerdas * 0.8 * 30 * 0.2).toFixed(2)}*<br>
        <small>*Considerando reposição diária de 20% das perdas.</small>
      `;
      document.getElementById('resultado').innerHTML = texto;
    } catch(e){
      document.getElementById('resultado').textContent = 'Erro no cálculo. Verifique os valores.';
    }
  }

  // Acessibilidade
  let tamanhoFonte = 100;
  function aumentarFonte(){
    if(tamanhoFonte < 150){
      tamanhoFonte += 10;
      document.body.style.fontSize = tamanhoFonte + '%';
    }
  }
  function diminuirFonte(){
    if(tamanhoFonte > 80){
      tamanhoFonte -= 10;
      document.body.style.fontSize = tamanhoFonte + '%';
    }
  }
  function alternarContraste(){
    document.body.classList.toggle('alto-contraste');
  }

  // Navegação por teclado para details
  document.addEventListener('keydown', function(e){
    if(e.key === 'Enter' && e.target.tagName === 'SUMMARY'){
      e.target.click();
    }
  });
</script>

</body>
</html>

import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-PAWW4kAd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var markup_default = "<div class=\"flex min-h-screen\">\n<!-- SIDEBAR (Solo PC) -->\n<aside class=\"w-64 bg-white border-r border-slate-200 flex-shrink-0 hidden md:flex flex-col sticky top-0 h-screen\">\n<div class=\"p-6 border-b border-slate-100\">\n<div class=\"flex items-center gap-3\">\n<div class=\"w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xl\">🩺</div>\n<div>\n<h1 class=\"font-bold text-slate-800 leading-tight\">Cuidados</h1>\n<p class=\"text-xs text-slate-500\">Paliativos · Seguimiento</p>\n</div>\n</div>\n</div>\n<nav class=\"flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin\">\n<button data-view=\"agenda\" class=\"nav-btn active w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all\">\n<span class=\"text-lg\">📅</span> Agenda Semanal\n</button>\n<button data-view=\"pacientes\" class=\"nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all\">\n<span class=\"text-lg\">👥</span> Fichas de Pacientes\n</button>\n<button data-view=\"visitas\" class=\"nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all\">\n<span class=\"text-lg\">📝</span> Registro de Visitas\n</button>\n<button data-view=\"planilla\" class=\"nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all\">\n<span class=\"text-lg\">📊</span> Planilla de visitas\n</button>\n</nav>\n<div class=\"p-4 border-t border-slate-100 space-y-2 flex-shrink-0\">\n<button id=\"btn-sync-now\" class=\"w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-50 rounded-lg transition\">\n<span id=\"sync-icon\">🔄</span> <span id=\"sync-label\">Sincronizar ahora</span>\n</button>\n<p class=\"sync-status text-center\" id=\"sync-status\">Última sync: nunca</p>\n<button id=\"btn-import-csv\" class=\"w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-50 rounded-lg transition\"><span>📊</span> Importar CSV</button>\n<button id=\"btn-config\" class=\"w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition\"><span>⚙️</span> Configuración</button>\n<button id=\"btn-export\" class=\"w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition\"><span>💾</span> Exportar JSON</button>\n<button id=\"btn-import\" class=\"w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition\"><span>📥</span> Importar JSON</button>\n<button id=\"btn-reset\" class=\"w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition\"><span>🗑️</span> Reiniciar demo</button>\n</div>\n</aside>\n<!-- MAIN -->\n<main class=\"flex-1 flex flex-col min-w-0\">\n<header class=\"md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between\">\n<div class=\"flex items-center gap-2\">\n<div class=\"w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white\">🩺</div>\n<span class=\"font-semibold text-sm\">Cuidados Paliativos</span>\n</div>\n<div class=\"flex gap-2\">\n<button id=\"btn-sync-now-mobile\" class=\"text-xs text-blue-700 font-medium px-2 py-1 rounded hover:bg-blue-50\">🔄 Sync</button>\n<button id=\"btn-config-mobile\" class=\"text-xs text-slate-600 font-medium px-2 py-1 rounded hover:bg-slate-50\">⚙️ Config</button>\n</div>\n</header>\n<!-- Barra de navegación móvil -->\n<nav class=\"md:hidden bg-white border-b border-slate-200 px-2 py-2 flex gap-1 overflow-x-auto\">\n<button data-view=\"agenda\" class=\"nav-btn active flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium\">📅 Agenda</button>\n<button data-view=\"pacientes\" class=\"nav-btn flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-slate-600\">👥 Pacientes</button>\n<button data-view=\"visitas\" class=\"nav-btn flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-slate-600\">📝 Visitas</button>\n<button data-view=\"planilla\" class=\"nav-btn flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-slate-600\">📊 Planilla</button>\n<button id=\"btn-import-csv-mobile\" class=\"flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-emerald-700\">📊 CSV</button>\n</nav>\n<div class=\"flex-1 overflow-auto\">\n<!-- ============ AGENDA ============ -->\n<section id=\"view-agenda\" class=\"view active p-4 md:p-8 fade-in\">\n<div class=\"bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4\">\n<div class=\"flex flex-wrap items-center justify-between gap-3\">\n<div class=\"flex items-center gap-2\">\n<button id=\"btn-prev-week\" class=\"w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600\">←</button>\n<button id=\"btn-today\" class=\"px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold border border-brand-200\">Hoy</button>\n<button id=\"btn-next-week\" class=\"w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600\">→</button>\n</div>\n<div class=\"text-center\">\n<h2 class=\"text-lg font-bold text-slate-800\" id=\"agenda-week-label\">Semana actual</h2>\n<p class=\"text-xs text-slate-500\" id=\"agenda-week-sublabel\"></p>\n</div>\n<button id=\"btn-toggle-vista\" class=\"hidden lg:flex px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 items-center gap-1.5\">\n<span id=\"btn-toggle-vista-icon\">🗂️</span> <span id=\"btn-toggle-vista-label\">Comprimir todo</span>\n</button>\n<button id=\"btn-add-visit\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm flex items-center gap-2\">\n<span>➕</span> Nueva visita\n</button>\n</div>\n</div>\n\n<div class=\"bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4\">\n<div class=\"flex flex-wrap items-start justify-between gap-2 mb-3\">\n<div>\n<h3 class=\"text-sm font-bold text-slate-800\">Origen del recorrido</h3>\n<p class=\"text-xs text-slate-500\">Google Maps arma la ruta desde acá. A la mañana suele ser tu casa; a la tarde, el trabajo.</p>\n</div>\n</div>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3\">\n<label class=\"block\">\n<span class=\"block text-xs font-semibold text-amber-700 mb-1\">Mañana</span>\n<input id=\"origen-manana\" type=\"text\" autocomplete=\"street-address\" placeholder=\"Ej: mi casa, Av. San Juan 1234\" class=\"w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100\">\n</label>\n<label class=\"block\">\n<span class=\"block text-xs font-semibold text-indigo-700 mb-1\">Tarde</span>\n<input id=\"origen-tarde\" type=\"text\" autocomplete=\"street-address\" placeholder=\"Ej: trabajo, Villa Soldati\" class=\"w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100\">\n</label>\n</div>\n<p id=\"origen-status\" class=\"text-[11px] text-slate-500 mt-2\">Si dejás un origen vacío, esa ruta empieza en el primer paciente.</p>\n</div>\n\n<!-- VISTA DESKTOP -->\n<div class=\"hidden lg:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden\">\n<div class=\"grid grid-cols-7 bg-slate-50 border-b border-slate-200\" id=\"agenda-header\"></div>\n<div class=\"grid grid-cols-7 divide-x divide-slate-200\" id=\"agenda-grid\"></div>\n</div>\n<!-- VISTA MÓVIL -->\n<div class=\"lg:hidden space-y-3\">\n<div class=\"bg-white rounded-2xl shadow-sm border border-slate-200 p-2\">\n<div class=\"grid grid-cols-7 gap-1\" id=\"mobile-day-tabs\"></div>\n</div>\n<div id=\"mobile-day-content\" class=\"bg-white rounded-2xl shadow-sm border border-slate-200 p-4\"></div>\n</div>\n<div class=\"grid grid-cols-2 md:grid-cols-4 gap-3 mt-6\">\n<div class=\"bg-white p-4 rounded-xl border border-slate-200\"><p class=\"text-xs text-slate-500\">Visitas esta semana</p><p class=\"text-2xl font-bold text-slate-800 mt-1\" id=\"stat-week\">0</p></div>\n<div class=\"bg-white p-4 rounded-xl border border-slate-200\"><p class=\"text-xs text-slate-500\">Horas estimadas</p><p class=\"text-2xl font-bold text-brand-600 mt-1\" id=\"stat-hours\">0h</p></div>\n<div class=\"bg-white p-4 rounded-xl border border-slate-200\"><p class=\"text-xs text-slate-500\">Pacientes activos</p><p class=\"text-2xl font-bold text-brand-600 mt-1\" id=\"stat-active\">0</p></div>\n<div class=\"bg-white p-4 rounded-xl border border-slate-200\"><p class=\"text-xs text-slate-500\">Con opioides</p><p class=\"text-2xl font-bold text-amber-600 mt-1\" id=\"stat-opioides\">0</p></div>\n</div>\n<!-- PANEL DE PACIENTES PENDIENTES -->\n<div id=\"pending-panel\" class=\"mt-6 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden\"></div>\n</section>\n<!-- ============ PACIENTES ============ -->\n<section id=\"view-pacientes\" class=\"view p-4 md:p-8 fade-in\">\n<div class=\"flex flex-wrap items-center justify-between gap-3 mb-6\">\n<div>\n<h2 class=\"text-2xl font-bold text-slate-800\">Fichas de Pacientes</h2>\n<p class=\"text-sm text-slate-500\">Gestión integral de NyA en seguimiento</p>\n</div>\n<button id=\"btn-add-patient\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm flex items-center gap-2\">\n<span>➕</span> Nuevo Paciente\n</button>\n</div>\n<div class=\"bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4\">\n<div class=\"flex flex-wrap gap-3 items-center\">\n<div class=\"flex-1 min-w-[200px] relative\">\n<span class=\"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400\">🔍</span>\n<input id=\"search-pacientes\" type=\"text\" placeholder=\"Buscar por nombre, DNI, obra social...\" class=\"w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100\">\n</div>\n<select id=\"filter-estado\" class=\"px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n<option value=\"\">Todos los estados</option>\n<option value=\"Activo\">Activo</option>\n<option value=\"Intermitente\">Intermitente</option>\n<option value=\"Fuera de seguimiento\">Fuera de seguimiento</option>\n</select>\n<!-- NUEVOS FILTROS -->\n<select id=\"filter-empresa\" class=\"px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n<option value=\"\">Todas las empresas</option>\n</select>\n<select id=\"filter-os\" class=\"px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n<option value=\"\">Todas las Obras Sociales</option>\n</select>\n<div class=\"flex rounded-xl border border-slate-200 overflow-hidden\">\n<button id=\"view-cards\" class=\"view-toggle-btn active px-3 py-2 text-xs font-medium transition\" title=\"Vista tarjetas\">🗂️ Tarjetas</button>\n<button id=\"view-list\" class=\"view-toggle-btn px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 transition\" title=\"Vista lista\">📋 Lista</button>\n</div>\n</div>\n</div>\n<div id=\"pacientes-container\"></div>\n</section>\n<!-- ============ VISITAS ============ -->\n<section id=\"view-visitas\" class=\"view p-4 md:p-8 fade-in\">\n<div class=\"flex flex-wrap items-center justify-between gap-3 mb-6\">\n<div>\n<h2 class=\"text-2xl font-bold text-slate-800\">Registro de Visitas</h2>\n<p class=\"text-sm text-slate-500\">Pendientes y notas post visita · más recientes primero</p>\n</div>\n<input id=\"search-visitas\" type=\"text\" placeholder=\"Buscar en evoluciones...\" class=\"px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n</div>\n<div id=\"visitas-list\" class=\"space-y-3\"></div>\n</section>\n<!-- ============ PLANILLA DE VISITAS ============ -->\n<section id=\"view-planilla\" class=\"view p-4 md:p-8 fade-in\">\n<div class=\"flex items-center justify-between gap-3 mb-6\">\n<button id=\"btn-prev-month\" class=\"w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600\">←</button>\n<div class=\"text-center\">\n<h2 class=\"text-lg font-bold text-slate-800\" id=\"planilla-mes-label\">Mes actual</h2>\n<p class=\"text-xs text-slate-500\">Visitas evolucionadas y firmadas</p>\n</div>\n<button id=\"btn-next-month\" class=\"w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600\">→</button>\n</div>\n<div id=\"planilla-cards\" class=\"grid grid-cols-2 md:grid-cols-4 gap-3 mb-2\"></div>\n<p class=\"text-xs text-slate-400 mb-6\">💡 El valor por visita se guarda solo, no hace falta cargarlo cada mes.</p>\n<div class=\"bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4\">\n<div class=\"flex flex-wrap gap-3 items-center\">\n<select id=\"planilla-filter-empresa\" class=\"px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n<option value=\"\">Todas las empresas</option>\n</select>\n<label class=\"flex items-center gap-2 text-sm text-slate-600 px-2\">\n<input id=\"planilla-solo-pendientes\" type=\"checkbox\" class=\"w-4 h-4 accent-brand-600\"> Solo pendientes\n</label>\n</div>\n</div>\n<div id=\"planilla-table-wrap\" class=\"bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden\"></div>\n</section>\n</div>\n</main>\n</div>\n\n<!-- MODAL PACIENTE -->\n<div id=\"modal-paciente\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<h3 id=\"modal-paciente-title\" class=\"text-lg font-bold text-slate-800\">Nuevo Paciente</h3>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<form id=\"form-paciente\" class=\"flex-1 overflow-auto p-5 space-y-4 scrollbar-thin\">\n<input type=\"hidden\" id=\"pac-id\">\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-4\">\n<div class=\"md:col-span-2\"><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Nombre del NyA *</label><input id=\"pac-nombre\" required class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">DNI</label><input id=\"pac-dni\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Fecha de nacimiento</label><input id=\"pac-nac\" type=\"date\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Dirección</label><input id=\"pac-direccion\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Piso / Depto</label><input id=\"pac-piso\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Empresa / Prepaga</label><input id=\"pac-empresa\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Obra Social</label><input id=\"pac-os\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\" placeholder=\"OSDE, CEMIC, Swiss Medical...\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Nº Afiliado</label><input id=\"pac-afiliado\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Contacto</label><input id=\"pac-contacto\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Estado</label><select id=\"pac-estado\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"><option>Activo</option><option>Intermitente</option><option>Fuera de seguimiento</option></select></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Usa opioides</label><select id=\"pac-opioides\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"><option value=\"No\">No</option><option value=\"Sí\">Sí</option></select></div>\n</div>\n<div class=\"flex justify-end gap-2 pt-4 border-t border-slate-100\">\n<button type=\"button\" class=\"modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100\">Cancelar</button>\n<button type=\"submit\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium\">Guardar</button>\n</div>\n</form>\n</div>\n</div>\n\n<!-- MODAL DETALLE -->\n<div id=\"modal-detalle\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<h3 class=\"text-lg font-bold text-slate-800\">Ficha del Paciente</h3>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<div id=\"detalle-content\" class=\"flex-1 overflow-auto p-5 scrollbar-thin\"></div>\n</div>\n</div>\n\n<!-- MODAL AGENDA -->\n<div id=\"modal-agenda\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[92vh] overflow-hidden flex flex-col\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<h3 id=\"modal-agenda-title\" class=\"text-lg font-bold text-slate-800\">Nueva visita</h3>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<form id=\"form-agenda\" class=\"flex-1 overflow-auto p-5 space-y-4 scrollbar-thin\">\n<input type=\"hidden\" id=\"ag-id\">\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Paciente *</label><select id=\"ag-paciente\" required class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></select></div>\n<div class=\"grid grid-cols-2 gap-3\">\n<div>\n<label class=\"block text-xs font-semibold text-slate-600 mb-1\">Día *</label>\n<select id=\"ag-dia\" required class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n<option>Lunes</option><option>Martes</option><option>Miércoles</option>\n<option>Jueves</option><option>Viernes</option><option>Sábado</option><option>Domingo</option>\n</select>\n</div>\n<div>\n<label class=\"block text-xs font-semibold text-slate-600 mb-1\">Fecha</label>\n<input id=\"ag-fecha\" type=\"date\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n</div>\n</div>\n<div id=\"ag-fecha-preview\" class=\"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700\">\n📅 Se agendará para: <strong id=\"ag-fecha-preview-text\">-</strong>\n</div>\n<div class=\"bg-brand-50 border border-brand-200 rounded-xl p-3\">\n<div class=\"flex items-center justify-between mb-2\">\n<p class=\"text-xs font-semibold text-brand-800\">🕐 Hora de inicio</p>\n<p class=\"text-[10px] text-brand-700\" id=\"ag-hora-preview\">Libre: 09:45</p>\n</div>\n<input id=\"ag-hora\" type=\"time\" value=\"09:00\" required class=\"w-full px-3 py-2 rounded-lg border border-brand-200 text-sm focus:outline-none focus:border-brand-500\">\n<p class=\"text-[10px] text-brand-700 mt-2\">⏱️ Visita 30' + traslado 15' = 45' bloqueados</p>\n</div>\n<label class=\"flex items-start gap-2 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer\">\n<input id=\"ag-recurrente\" type=\"checkbox\" class=\"mt-0.5 w-4 h-4 accent-brand-600\">\n<div><p class=\"text-sm font-medium text-slate-700\">🔁 Recurrente</p><p class=\"text-[11px] text-slate-500\" id=\"ag-recurrente-hint\">Se repite cada semana (todos los <span id=\"ag-recurrente-dia\">lunes</span>)</p></div>\n</label>\n<div id=\"ag-intervalo-wrap\" class=\"hidden\">\n<label class=\"block text-xs font-semibold text-slate-600 mb-1\">Se repite cada</label>\n<select id=\"ag-intervalo\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n<option value=\"1\">Semana (todas las semanas)</option>\n<option value=\"2\">2 semanas</option>\n<option value=\"3\">3 semanas</option>\n<option value=\"4\">4 semanas (aprox. mensual)</option>\n</select>\n</div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Notas (ej: llevar recetas)</label><textarea id=\"ag-notas\" rows=\"2\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></textarea></div>\n<div id=\"ag-saltos-section\" class=\"hidden bg-amber-50 border border-amber-200 rounded-xl p-3\">\n<p class=\"text-xs font-semibold text-amber-800 mb-2\">⏭️ Semanas saltadas</p>\n<div id=\"ag-saltos-list\" class=\"space-y-1 mb-2\"></div>\n<div class=\"flex gap-2\"><input id=\"ag-salto-fecha\" type=\"date\" class=\"flex-1 px-2 py-1.5 rounded-lg border border-amber-200 text-sm\"><button type=\"button\" id=\"btn-add-salto\" class=\"px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs rounded-lg font-medium\">+ Saltar</button></div>\n</div>\n<div class=\"flex justify-between gap-2 pt-2\">\n<button type=\"button\" id=\"btn-delete-agenda\" class=\"hidden px-3 py-2 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50\">Eliminar</button>\n<div class=\"flex gap-2 ml-auto\">\n<button type=\"button\" class=\"modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100\">Cancelar</button>\n<button type=\"submit\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium\">Guardar</button>\n</div>\n</div>\n</form>\n</div>\n</div>\n\n<!-- MODAL EVOLUCIÓN -->\n<div id=\"modal-evolucion\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<h3 class=\"text-lg font-bold text-slate-800\">Pendientes</h3>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<form id=\"form-evolucion\" class=\"flex-1 overflow-auto p-5 space-y-4 scrollbar-thin\">\n<input type=\"hidden\" id=\"ev-id\"><input type=\"hidden\" id=\"ev-agendaId\"><input type=\"hidden\" id=\"ev-pacienteId\">\n<div id=\"ev-paciente-info\" class=\"bg-brand-50 border border-brand-200 rounded-xl p-4\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Fecha de visita *</label><input id=\"ev-fecha\" type=\"date\" required class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Pendiente / nota (opcional)</label><textarea id=\"ev-notas\" rows=\"5\" placeholder=\"Ej: mandar receta de ibuprofeno\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\"></textarea><p class=\"text-[11px] text-slate-400 mt-1\" id=\"ev-notas-hint\"></p></div>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3\">\n<label class=\"flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer\"><input id=\"ev-sistema\" type=\"checkbox\" class=\"mt-1 w-4 h-4 accent-brand-600\"><div><p class=\"text-sm font-medium text-slate-700\">✓ Evolucioné en el sistema</p><p class=\"text-xs text-slate-500\">Cargada en HC digital</p></div></label>\n<label id=\"ev-firma-wrap\" class=\"flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer\"><input id=\"ev-firma\" type=\"checkbox\" class=\"mt-1 w-4 h-4 accent-brand-600\"><div><p class=\"text-sm font-medium text-slate-700\">✓ Firmó planilla control OS</p><p class=\"text-xs text-slate-500\">Planilla de la obra social</p></div></label>\n</div>\n<div id=\"ev-firma-oculto-msg\" class=\"hidden bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-800\">\nℹ️ <strong>OSDE / CEMIC</strong>: esta obra social no requiere planilla de firmas.\n</div>\n<div class=\"flex justify-end gap-2 pt-4 border-t border-slate-100\">\n<button type=\"button\" class=\"modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100\">Cancelar</button>\n<button type=\"submit\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium\">Guardar</button>\n</div>\n</form>\n</div>\n</div>\n\n<!-- MODAL MOVER VISITA -->\n<div id=\"modal-mover\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<h3 class=\"text-lg font-bold text-slate-800\">↪️ Mover visita</h3>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<form id=\"form-mover\" class=\"p-5 space-y-4\">\n<input type=\"hidden\" id=\"mover-id\">\n<p class=\"text-xs text-slate-500\" id=\"mover-info\"></p>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Nuevo día</label>\n<select id=\"mover-dia\" required class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n<option>Lunes</option><option>Martes</option><option>Miércoles</option>\n<option>Jueves</option><option>Viernes</option><option>Sábado</option><option>Domingo</option>\n</select>\n</div>\n<div><label class=\"block text-xs font-semibold text-slate-600 mb-1\">Nueva hora</label>\n<input id=\"mover-hora\" type=\"time\" required class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500\">\n</div>\n<p class=\"text-[11px] text-slate-400\">Solo mueve esta semana. La visita recurrente sigue apareciendo normalmente la semana que viene.</p>\n<div class=\"flex justify-end gap-2 pt-2\">\n<button type=\"button\" class=\"modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100\">Cancelar</button>\n<button type=\"submit\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium\">Mover</button>\n</div>\n</form>\n</div>\n</div>\n\n<!-- MODAL CONFIG -->\n<div id=\"modal-config\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<h3 class=\"text-lg font-bold text-slate-800\">Configuración</h3>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<div class=\"p-5 space-y-4\">\n<div class=\"bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3\">\n<p class=\"text-xs font-bold text-blue-800 uppercase tracking-wide\">Conexión con Google Sheets</p>\n<div><label class=\"block text-xs font-medium text-blue-800 mb-1\">URL del Apps Script</label><input id=\"cfg-api-url\" type=\"url\" placeholder=\"https://script.google.com/macros/s/.../exec\" class=\"w-full px-3 py-2 rounded-lg border border-blue-200 text-sm\"></div>\n<div><label class=\"block text-xs font-medium text-blue-800 mb-1\">Token secreto</label><input id=\"cfg-api-token\" type=\"text\" placeholder=\"UUID de la hoja Config\" class=\"w-full px-3 py-2 rounded-lg border border-blue-200 text-sm font-mono\"></div>\n<p class=\"text-[11px] text-blue-700\">Si dejás esto vacío, la app funciona solo con localStorage.</p>\n</div>\n<div class=\"bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3\">\n<p class=\"text-xs font-bold text-amber-800 uppercase tracking-wide\">Origen del recorrido</p>\n<p class=\"text-[11px] text-amber-800\">Los mismos datos que en la agenda. La ruta de la mañana sale del primero y la de la tarde del segundo.</p>\n<div><label class=\"block text-xs font-medium text-amber-900 mb-1\">Mañana (casa)</label><input id=\"cfg-origen-manana\" type=\"text\" autocomplete=\"street-address\" placeholder=\"Ej: mi casa, Av. San Juan 1234\" class=\"w-full px-3 py-2 rounded-lg border border-amber-200 text-sm\"></div>\n<div><label class=\"block text-xs font-medium text-amber-900 mb-1\">Tarde (trabajo)</label><input id=\"cfg-origen-tarde\" type=\"text\" autocomplete=\"street-address\" placeholder=\"Ej: trabajo, Villa Soldati\" class=\"w-full px-3 py-2 rounded-lg border border-amber-200 text-sm\"></div>\n</div>\n<div class=\"bg-slate-50 border border-slate-200 rounded-xl p-4\">\n<p class=\"text-xs font-bold text-slate-600 uppercase tracking-wide mb-2\">Constantes de la agenda</p>\n<p class=\"text-xs text-slate-600\">⏱️ Duración de visita: <strong>30 minutos</strong></p>\n<p class=\"text-xs text-slate-600\">🚗 Tiempo de traslado: <strong>15 minutos</strong></p>\n<p class=\"text-xs text-slate-600\">📦 Bloque total por paciente: <strong>45 minutos</strong></p>\n</div>\n<div class=\"flex justify-end gap-2\">\n<button class=\"modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100\">Cancelar</button>\n<button id=\"btn-save-config\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium\">Guardar</button>\n</div>\n</div>\n</div>\n</div>\n\n<!-- MODAL IMPORT CSV -->\n<div id=\"modal-csv\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<div><h3 class=\"text-lg font-bold text-slate-800\">Importar pacientes desde CSV</h3><p class=\"text-xs text-slate-500 mt-0.5\">Exportá tu Google Sheet como CSV (Archivo → Descargar → CSV)</p></div>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<div class=\"flex-1 overflow-auto p-5 space-y-4 scrollbar-thin\">\n<div id=\"csv-step1\">\n<div class=\"border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-brand-400 transition cursor-pointer\" id=\"csv-dropzone\">\n<p class=\"text-4xl mb-2\">📊</p>\n<p class=\"text-sm font-medium text-slate-700\">Arrastrá el CSV acá o hacé clic</p>\n<input id=\"csv-file\" type=\"file\" accept=\".csv,text/csv,text/plain\" class=\"hidden\">\n</div>\n<div class=\"mt-4\">\n<label class=\"block text-xs font-semibold text-slate-600 mb-1\">O pegá el contenido</label>\n<textarea id=\"csv-paste\" rows=\"4\" class=\"w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-mono\"></textarea>\n<div class=\"flex items-center gap-4 mt-3 text-xs flex-wrap\">\n<label class=\"flex items-center gap-2\"><input type=\"radio\" name=\"csv-sep\" value=\"auto\" checked> Auto</label>\n<label class=\"flex items-center gap-2\"><input type=\"radio\" name=\"csv-sep\" value=\",\"> Coma</label>\n<label class=\"flex items-center gap-2\"><input type=\"radio\" name=\"csv-sep\" value=\";\"> Punto y coma</label>\n<label class=\"flex items-center gap-2\"><input type=\"checkbox\" id=\"csv-has-header\" checked> 1ra fila = encabezados</label>\n</div>\n<button id=\"csv-preview-btn\" class=\"mt-4 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium\">Vista previa →</button>\n</div>\n</div>\n<div id=\"csv-step2\" class=\"hidden\">\n<div class=\"bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 mb-3\"><strong>⚠️ Revisá el mapeo.</strong> El DNI se usa para actualizar pacientes existentes.</div>\n<div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 mb-4\" id=\"csv-mapping\"></div>\n<div><p class=\"text-xs font-semibold text-slate-600 mb-2\">Vista previa</p><div class=\"overflow-auto max-h-64 border border-slate-200 rounded-lg\"><table class=\"preview-table w-full\" id=\"csv-preview-table\"></table></div></div>\n<div class=\"flex justify-between items-center pt-4 border-t border-slate-100\">\n<p class=\"text-xs text-slate-500\" id=\"csv-stats\"></p>\n<div class=\"flex gap-2\"><button id=\"csv-back-btn\" class=\"px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100\">← Atrás</button><button id=\"csv-import-btn\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium\">Importar</button></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n<!-- MODAL IMPORT JSON -->\n<div id=\"modal-import\" class=\"hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4\">\n<div class=\"bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden\">\n<div class=\"p-5 border-b border-slate-100 flex items-center justify-between\">\n<h3 class=\"text-lg font-bold text-slate-800\">Importar JSON</h3>\n<button class=\"modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none\">&times;</button>\n</div>\n<div class=\"p-5 space-y-4\">\n<p class=\"text-sm text-slate-600\">Seleccioná un archivo JSON previamente exportado.</p>\n<input id=\"import-file\" type=\"file\" accept=\"application/json\" class=\"w-full text-sm\">\n<div class=\"flex justify-end gap-2\">\n<button class=\"modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100\">Cancelar</button>\n<button id=\"btn-do-import\" class=\"bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium\">Importar</button>\n</div>\n</div>\n</div>\n</div>\n\n<div id=\"toast-container\" class=\"fixed top-4 right-4 z-[100] space-y-2\"></div>";
function mountPaliativos(root) {
	root.innerHTML = markup_default;
	startPaliativos();
}
function startPaliativos() {
	const DURACION_VISITA = 30;
	const BLOQUE_TOTAL = 45;
	const KEYS = {
		pacientes: "paliativos_pacientes",
		agenda: "paliativos_agenda",
		evoluciones: "paliativos_evoluciones",
		tarifas: "paliativos_tarifas",
		config: "paliativos_config",
		lastSync: "paliativos_last_sync",
		pendingChanges: "paliativos_pending",
		viewMode: "paliativos_view_mode"
	};
	const state = {
		pacientes: [],
		agenda: [],
		evoluciones: [],
		tarifas: [],
		config: {
			apiUrl: "",
			apiToken: "",
			origenManana: "",
			origenTarde: ""
		},
		lastSync: null,
		pendingChanges: [],
		viewMode: "cards"
	};
	const DIAS = [
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado",
		"Domingo"
	];
	const DIAS_CORTO = [
		"L",
		"M",
		"X",
		"J",
		"V",
		"S",
		"D"
	];
	const DIA_IDX = {
		Lunes: 0,
		Martes: 1,
		Miércoles: 2,
		Jueves: 3,
		Viernes: 4,
		Sábado: 5,
		Domingo: 6
	};
	let weekOffset = 0;
	let selectedDayMobile = null;
	let selectedDayByWeek = {};
	let vistaGlobalOverride = null;
	const UMBRAL_COMPACTA = 5;
	let cardsToggleadas = /* @__PURE__ */ new Set();
	function uid() {
		return crypto && crypto.randomUUID ? crypto.randomUUID() : "id-" + Date.now() + "-" + Math.random().toString(36).slice(2, 9);
	}
	function saveLocal() {
		localStorage.setItem(KEYS.pacientes, JSON.stringify(state.pacientes));
		localStorage.setItem(KEYS.agenda, JSON.stringify(state.agenda));
		localStorage.setItem(KEYS.evoluciones, JSON.stringify(state.evoluciones));
		localStorage.setItem(KEYS.tarifas, JSON.stringify(state.tarifas));
		localStorage.setItem(KEYS.config, JSON.stringify(state.config));
		localStorage.setItem(KEYS.lastSync, state.lastSync || "");
		localStorage.setItem(KEYS.pendingChanges, JSON.stringify(state.pendingChanges));
		localStorage.setItem(KEYS.viewMode, state.viewMode);
	}
	function loadLocal() {
		try {
			const rawPacientes = JSON.parse(localStorage.getItem(KEYS.pacientes) || "[]");
			state.pacientes = rawPacientes.map((p) => ({
				...p,
				id: String(p.id).trim()
			}));
			const rawAgenda = JSON.parse(localStorage.getItem(KEYS.agenda) || "[]");
			state.agenda = rawAgenda.map((a) => ({
				...a,
				id: String(a.id).trim(),
				pacienteId: String(a.pacienteId).trim()
			}));
			const rawEvoluciones = JSON.parse(localStorage.getItem(KEYS.evoluciones) || "[]");
			state.evoluciones = rawEvoluciones.map((e) => ({
				...e,
				id: String(e.id).trim(),
				pacienteId: String(e.pacienteId).trim()
			}));
			state.tarifas = JSON.parse(localStorage.getItem(KEYS.tarifas) || "[]");
			state.config = Object.assign({
				apiUrl: "",
				apiToken: "",
				origenManana: "",
				origenTarde: ""
			}, JSON.parse(localStorage.getItem(KEYS.config) || "{}"));
			state.lastSync = localStorage.getItem(KEYS.lastSync) || null;
			state.pendingChanges = JSON.parse(localStorage.getItem(KEYS.pendingChanges) || "[]");
			state.viewMode = localStorage.getItem(KEYS.viewMode) || "cards";
		} catch (e) {}
	}
	let isSyncing = false;
	function saneaHoraFront(val) {
		if (!val && val !== 0) return "09:00";
		if (typeof val === "number") {
			if (val >= 0 && val < 1) {
				const totalMin = Math.round(val * 24 * 60);
				const hh = String(Math.floor(totalMin / 60) % 24).padStart(2, "0");
				const mm = String(totalMin % 60).padStart(2, "0");
				return hh + ":" + mm;
			}
			return "09:00";
		}
		const s = String(val).trim();
		if (!s) return "09:00";
		if (/^0?\.\d+$/.test(s)) {
			const num = parseFloat(s);
			if (num >= 0 && num < 1) {
				const totalMin = Math.round(num * 24 * 60);
				const hh = String(Math.floor(totalMin / 60) % 24).padStart(2, "0");
				const mm = String(totalMin % 60).padStart(2, "0");
				return hh + ":" + mm;
			}
		}
		if (/^\d{1,2}:\d{2}$/.test(s)) return s.padStart(5, "0");
		if (s.includes("T")) {
			const d = new Date(s);
			if (!isNaN(d.getTime())) {
				const hh = String(d.getHours()).padStart(2, "0");
				const mm = String(d.getMinutes()).padStart(2, "0");
				return hh + ":" + mm;
			}
		}
		return "09:00";
	}
	async function syncWithSheets() {
		if (isSyncing) {
			console.log("⏳ Sincronización ya en progreso, omitiendo solicitud...");
			return;
		}
		if (!state.config.apiUrl || !state.config.apiToken) {
			toast("Configurá la URL y token en ⚙️ Configuración", "info");
			return;
		}
		isSyncing = true;
		updateSyncUI("syncing");
		try {
			if (state.pendingChanges.length > 0) {
				const pendientes = [...state.pendingChanges];
				for (const change of pendientes) try {
					await apiCall("POST", {
						...change,
						token: state.config.apiToken
					});
					state.pendingChanges = state.pendingChanges.filter((p) => p.timestamp !== change.timestamp);
				} catch (err) {
					console.warn("⚠️ Falló el envío de un cambio pendiente. Se reintentará la próxima vez.", err, change);
				}
				saveLocal();
			}
			if (state.pendingChanges.length > 0) {
				updateSyncUI("pending");
				toast("Hay cambios sin poder enviar todavía. Se reintentará en la próxima sincronización.", "info");
				return;
			}
			console.log("📥 Iniciando descarga de datos...");
			const data = await apiCall("POST", {
				action: "getAll",
				token: state.config.apiToken,
				t: Date.now()
			});
			console.log("📦 Datos recibidos:", {
				pacientes: data.pacientes?.length || 0,
				agenda: data.agenda?.length || 0,
				evoluciones: data.evoluciones?.length || 0
			});
			if (data.error) throw new Error(data.error);
			if (data.pacientes && Array.isArray(data.pacientes)) state.pacientes = data.pacientes.map((p) => ({
				...p,
				id: String(p.id || "").trim()
			}));
			if (data.agenda && Array.isArray(data.agenda)) state.agenda = data.agenda.map((a) => ({
				...a,
				id: String(a.id || "").trim(),
				pacienteId: String(a.pacienteId || "").trim(),
				diaSemana: a.diaSemana ? String(a.diaSemana).trim() : "",
				horaInicio: saneaHoraFront(a.horaInicio)
			}));
			if (data.evoluciones && Array.isArray(data.evoluciones)) state.evoluciones = data.evoluciones.map((e) => ({
				...e,
				id: String(e.id || "").trim(),
				pacienteId: String(e.pacienteId || "").trim()
			}));
			if (data.tarifas && Array.isArray(data.tarifas)) state.tarifas = data.tarifas.map((t) => ({
				...t,
				empresa: String(t.empresa || "").trim()
			}));
			state.lastSync = (/* @__PURE__ */ new Date()).toISOString();
			saveLocal();
			updateSyncUI("ok");
			toast("Sincronizado con Google Sheets");
		} catch (err) {
			console.error("💥 Error crítico en la descarga de sincronización:", err);
			updateSyncUI("error");
			toast("Error al sincronizar: " + err.message, "error");
		} finally {
			isSyncing = false;
			renderAll();
			updatePacienteFilters();
		}
	}
	async function apiCall(method, body) {
		const opts = { method };
		if (method === "POST") {
			opts.body = JSON.stringify(body);
			opts.headers = { "Content-Type": "text/plain;charset=utf-8" };
		}
		const res = await fetch(state.config.apiUrl, opts);
		if (!res.ok) throw new Error("HTTP " + res.status);
		const data = await res.json();
		if (data && data.error) throw new Error(data.error);
		return data;
	}
	function queueChange(action, data) {
		const sheet = data.sheet;
		const id = data.row ? data.row.id : data.id;
		state.pendingChanges = state.pendingChanges.filter((c) => {
			const cId = c.row ? c.row.id : c.id;
			return !(c.action === action && c.sheet === sheet && cId === id);
		});
		state.pendingChanges.push({
			action,
			...data,
			timestamp: Date.now()
		});
		saveLocal();
		updateSyncUI("pending");
	}
	function updateSyncUI(status) {
		const icon = document.getElementById("sync-icon");
		const label = document.getElementById("sync-label");
		const statusEl = document.getElementById("sync-status");
		if (status === "syncing") {
			icon.innerHTML = "<span class=\"inline-block spin\">🔄</span>";
			label.textContent = "Sincronizando...";
			statusEl.textContent = "Sincronizando...";
			statusEl.className = "sync-status text-center sync-pending";
		} else if (status === "ok") {
			icon.textContent = "🔄";
			label.textContent = "Sincronizar ahora";
			statusEl.textContent = "✓ Sync: " + new Date(state.lastSync).toLocaleTimeString("es-AR", {
				hour: "2-digit",
				minute: "2-digit"
			});
			statusEl.className = "sync-status text-center sync-ok";
		} else if (status === "pending") {
			icon.textContent = "🔄";
			label.textContent = "Sincronizar ahora";
			statusEl.textContent = "⏳ Cambios pendientes";
			statusEl.className = "sync-status text-center sync-pending";
		} else if (status === "error") {
			icon.textContent = "🔄";
			label.textContent = "Sincronizar ahora";
			statusEl.textContent = "✗ Error de sync";
			statusEl.className = "sync-status text-center sync-error";
		} else {
			statusEl.textContent = "Última sync: nunca";
			statusEl.className = "sync-status text-center";
		}
	}
	async function pushRow(sheetName, row) {
		const actionMap = {
			"Pacientes": "upsertPaciente",
			"Agenda": "upsertAgenda",
			"Evoluciones": "upsertEvolucion"
		};
		if (!state.config.apiUrl || !state.config.apiToken) {
			queueChange(actionMap[sheetName], {
				sheet: sheetName,
				row
			});
			return;
		}
		try {
			await apiCall("POST", {
				action: actionMap[sheetName],
				row,
				token: state.config.apiToken
			});
		} catch (err) {
			console.error(err);
			queueChange(actionMap[sheetName], {
				sheet: sheetName,
				row
			});
		}
	}
	async function pushDelete(sheetName, id) {
		if (!state.config.apiUrl || !state.config.apiToken) {
			queueChange("deleteRow", {
				sheet: sheetName,
				id
			});
			return;
		}
		try {
			await apiCall("POST", {
				action: "deleteRow",
				sheet: sheetName,
				id,
				token: state.config.apiToken
			});
		} catch (err) {
			queueChange("deleteRow", {
				sheet: sheetName,
				id
			});
		}
	}
	async function pushTarifa(row) {
		const payload = {
			...row,
			id: row.empresa
		};
		if (!state.config.apiUrl || !state.config.apiToken) {
			queueChange("upsertTarifa", {
				sheet: "Tarifas",
				row: payload
			});
			return;
		}
		try {
			await apiCall("POST", {
				action: "upsertTarifa",
				row: payload,
				token: state.config.apiToken
			});
		} catch (err) {
			console.error(err);
			queueChange("upsertTarifa", {
				sheet: "Tarifas",
				row: payload
			});
		}
	}
	function seedData() {
		const iso = (d) => isoDate(d);
		const hace = (n) => {
			const d = /* @__PURE__ */ new Date();
			d.setDate(d.getDate() - n);
			return iso(d);
		};
		state.pacientes = [
			{
				id: uid(),
				nombre: "Celia La Ruffa",
				direccion: "Av. San Juan 2845",
				piso: "5° B",
				empresa: "CareHome",
				obraSocial: "OSDE",
				numeroAfiliado: "284500/01",
				contacto: "María (hija) - 11-4567-8901",
				dni: "4567890",
				fechaNacimiento: "1942-03-15",
				usaOpioides: "Sí",
				estado: "Activo"
			},
			{
				id: uid(),
				nombre: "Andrea Saez",
				direccion: "Zeballos 1234",
				piso: "PB 2",
				empresa: "PalCare",
				obraSocial: "Swiss Medical",
				numeroAfiliado: "SM-98765",
				contacto: "Laura Saez - 11-5555-4321",
				dni: "12345678",
				fechaNacimiento: "1955-08-22",
				usaOpioides: "Sí",
				estado: "Activo"
			},
			{
				id: uid(),
				nombre: "Roberto Gómez",
				direccion: "Rivadavia 4520",
				piso: "3° A",
				empresa: "CEMIC",
				obraSocial: "CEMIC",
				numeroAfiliado: "MF-44521",
				contacto: "Ana Gómez - 11-4432-1100",
				dni: "8123456",
				fechaNacimiento: "1948-11-03",
				usaOpioides: "No",
				estado: "Intermitente"
			}
		];
		state.agenda = [
			{
				id: uid(),
				pacienteId: state.pacientes[0].id,
				diaSemana: "Lunes",
				horaInicio: "09:00",
				recurrente: true,
				semanasSaltadas: [],
				notasAgenda: "Control de dolor, llevar recetas"
			},
			{
				id: uid(),
				pacienteId: state.pacientes[0].id,
				diaSemana: "Jueves",
				horaInicio: "09:00",
				recurrente: true,
				semanasSaltadas: [],
				notasAgenda: "Control semanal"
			},
			{
				id: uid(),
				pacienteId: state.pacientes[1].id,
				diaSemana: "Martes",
				horaInicio: "11:00",
				recurrente: true,
				semanasSaltadas: [],
				notasAgenda: "Evaluar ajuste de dosis"
			},
			{
				id: uid(),
				pacienteId: state.pacientes[2].id,
				diaSemana: "Miércoles",
				horaInicio: "10:30",
				recurrente: true,
				semanasSaltadas: [],
				notasAgenda: "Control de signos"
			}
		];
		state.evoluciones = [{
			id: uid(),
			pacienteId: state.pacientes[0].id,
			fechaVisita: hace(3),
			notas: "Paciente lúcida, dolor controlado.",
			evolucionoSistema: true,
			firmoPlanillaOS: false
		}, {
			id: uid(),
			pacienteId: state.pacientes[1].id,
			fechaVisita: hace(5),
			notas: "Aumento de dolor nocturno. Ajuste de dosis.",
			evolucionoSistema: true,
			firmoPlanillaOS: true
		}];
		saveLocal();
	}
	function calcEdad(fn) {
		if (!fn) return null;
		const n = /* @__PURE__ */ new Date(String(fn).slice(0, 10) + "T00:00:00");
		if (isNaN(n.getTime())) return null;
		const h = /* @__PURE__ */ new Date();
		let e = h.getFullYear() - n.getFullYear();
		const m = h.getMonth() - n.getMonth();
		if (m < 0 || m === 0 && h.getDate() < n.getDate()) e--;
		return e;
	}
	function fmtFecha(iso) {
		if (!iso) return "-";
		return (/* @__PURE__ */ new Date(iso + "T00:00:00")).toLocaleDateString("es-AR", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		});
	}
	function fmtFechaCorta(iso) {
		if (!iso) return "";
		return (/* @__PURE__ */ new Date(iso + "T00:00:00")).toLocaleDateString("es-AR", {
			day: "2-digit",
			month: "short"
		});
	}
	function fmtFechaLarga(iso) {
		if (!iso) return "";
		return (/* @__PURE__ */ new Date(iso + "T00:00:00")).toLocaleDateString("es-AR", {
			weekday: "long",
			day: "2-digit",
			month: "long",
			year: "numeric"
		});
	}
	function getWeekStart(offset = 0) {
		const h = /* @__PURE__ */ new Date();
		h.setHours(0, 0, 0, 0);
		const d = h.getDay();
		const diff = d === 0 ? -6 : 1 - d;
		const l = new Date(h);
		l.setDate(h.getDate() + diff + offset * 7);
		return l;
	}
	function getWeekRange(offset = 0) {
		const lunes = getWeekStart(offset);
		const domingo = new Date(lunes);
		domingo.setDate(lunes.getDate() + 6);
		return {
			lunes,
			domingo
		};
	}
	function isoDate(d) {
		const y = d.getFullYear();
		const m = String(d.getMonth() + 1).padStart(2, "0");
		const day = String(d.getDate()).padStart(2, "0");
		return y + "-" + m + "-" + day;
	}
	function addMinutes(hhmm, min) {
		const partes = String(hhmm || "09:00").split(":");
		const h = parseInt(partes[0], 10);
		const m = parseInt(partes[1], 10);
		if (isNaN(h) || isNaN(m)) return "09:00";
		const total = h * 60 + m + min;
		const nh = Math.floor(total / 60) % 24;
		const nm = total % 60;
		return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
	}
	function pacienteById(id) {
		if (id === void 0 || id === null || id === "") return null;
		const searchId = String(id).trim();
		return state.pacientes.find((p) => String(p.id).trim() === searchId) || null;
	}
	function sameId(a, b) {
		return String(a ?? "").trim() === String(b ?? "").trim();
	}
	function contarAgendaEvoluciones(pacienteId) {
		const pid = String(pacienteId).trim();
		let agenda = 0, evoluciones = 0;
		state.agenda.forEach((a) => {
			if (String(a.pacienteId).trim() === pid) agenda++;
		});
		state.evoluciones.forEach((e) => {
			if (String(e.pacienteId).trim() === pid) evoluciones++;
		});
		return {
			agenda,
			evoluciones
		};
	}
	function toast(msg, type = "success") {
		const colors = {
			success: "bg-brand-600",
			error: "bg-rose-600",
			info: "bg-slate-700"
		};
		const el = document.createElement("div");
		el.className = `toast ${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg text-sm font-medium max-w-sm`;
		el.textContent = msg;
		document.getElementById("toast-container").appendChild(el);
		setTimeout(() => {
			el.style.opacity = "0";
			el.style.transition = "opacity 0.3s";
			setTimeout(() => el.remove(), 300);
		}, 2800);
	}
	function osNoRequiereFirma(os) {
		if (!os) return false;
		const n = String(os).toLowerCase().trim();
		return n === "osde" || n === "cemic";
	}
	function turnoDelDia(hora) {
		return parseInt(hora.split(":")[0]) < 13 ? "mañana" : "tarde";
	}
	function normalize(s) {
		return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
	}
	function esc(s) {
		if (s === null || s === void 0) return "";
		return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	}
	function getTodayDayIdx() {
		const d = (/* @__PURE__ */ new Date()).getDay();
		if (d === 0) return 6;
		return d - 1;
	}
	function direccionCompleta(p) {
		if (!p) return "";
		return [p.direccion, p.piso].filter(Boolean).join(", ");
	}
	function paraMaps(direccionStr) {
		const s = String(direccionStr || "").trim();
		if (!s) return "";
		if (/buenos aires|argentina|\bcaba\b/i.test(s)) return s;
		return s + ", Buenos Aires";
	}
	function mapsLinkDireccion(direccionStr) {
		const q = paraMaps(direccionStr);
		if (!q) return null;
		return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
	}
	function mapsLinkPaciente(p) {
		return mapsLinkDireccion(direccionCompleta(p));
	}
	function mapsLinkRuta(direcciones, origen) {
		const paradas = (direcciones || []).map(paraMaps).filter(Boolean);
		if (paradas.length === 0) return null;
		const salida = paraMaps(origen);
		const puntos = salida ? [salida, ...paradas] : paradas;
		if (puntos.length === 1) return mapsLinkDireccion(puntos[0]);
		return "https://www.google.com/maps/dir/" + puntos.map(encodeURIComponent).join("/");
	}
	function origenDeTurno(turno) {
		return turno === "tarde" ? state.config.origenTarde || "" : state.config.origenManana || "";
	}
	function tituloRuta(turno) {
		const origen = String(origenDeTurno(turno) || "").trim();
		if (!origen) return "Ruta en Google Maps. Sin origen: empieza en el primer paciente.";
		return "Ruta en Google Maps desde: " + origen;
	}
	function diasDesdeUltimaVisita(pacienteId) {
		let ultima = null;
		state.evoluciones.forEach((e) => {
			if (!sameId(e.pacienteId, pacienteId) || !e.fechaVisita) return;
			if (!ultima || e.fechaVisita > ultima) ultima = e.fechaVisita;
		});
		state.agenda.forEach((a) => {
			if (!sameId(a.pacienteId, pacienteId) || !a.fechasHechas) return;
			a.fechasHechas.forEach((f) => {
				if (!ultima || f > ultima) ultima = f;
			});
		});
		if (!ultima) return null;
		const hoy = /* @__PURE__ */ new Date();
		hoy.setHours(0, 0, 0, 0);
		const f = /* @__PURE__ */ new Date(ultima + "T00:00:00");
		return Math.round((hoy - f) / 864e5);
	}
	function chipUltimaVisita(pacienteId) {
		const dias = diasDesdeUltimaVisita(pacienteId);
		if (dias === null) return "<span class=\"text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium whitespace-nowrap\">— Sin visitas</span>";
		if (dias === 0) return "<span class=\"text-[10px] px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-medium whitespace-nowrap\">🟢 Hoy</span>";
		if (dias <= 7) return `<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-medium whitespace-nowrap">🟢 ${dias}d sin visita</span>`;
		if (dias <= 14) return `<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium whitespace-nowrap">🟡 ${dias}d sin visita</span>`;
		return `<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-medium whitespace-nowrap">🔴 ${dias}d sin visita</span>`;
	}
	function visitaHecha(pacienteId, fecha) {
		if (!fecha) return false;
		return state.evoluciones.some((e) => sameId(e.pacienteId, pacienteId) && String(e.fechaVisita || "").trim() === fecha);
	}
	function chipHecha() {
		return "<span class=\"text-[9px] px-1.5 py-0.5 rounded-full font-medium bg-brand-100 text-brand-700 whitespace-nowrap\">✅ Hecha</span>";
	}
	function estadoHecha(v) {
		const porEvolucion = visitaHecha(v.pacienteId, v.fechaVisitaSemana);
		const manual = !porEvolucion && (v.fechasHechas || []).includes(v.fechaVisitaSemana);
		return {
			hecha: porEvolucion || manual,
			manual
		};
	}
	function chipMovida(v) {
		const destino = v.movidoA;
		return `<div class="flex items-center justify-between gap-1 bg-blue-50 border border-blue-200 rounded-lg px-2 py-1.5 mb-2 text-[10px] text-blue-700">
<span>↪️ Pasó a ${esc(destino.dia)} ${esc(destino.hora || "")}</span>
<button data-action="deshacer-movida" data-id="${v.id}" data-semana="${v.semanaMovidaKey || ""}" class="text-blue-400 hover:text-blue-700" title="Deshacer">✕</button>
</div>`;
	}
	function ultimaEvolucion(pacienteId) {
		let ultima = null;
		state.evoluciones.forEach((e) => {
			if (!sameId(e.pacienteId, pacienteId) || !e.fechaVisita) return;
			if (!ultima || String(e.fechaVisita) >= String(ultima.fechaVisita)) ultima = e;
		});
		return ultima;
	}
	function chipsChecklistAdmin(p) {
		const ev = ultimaEvolucion(p.id);
		if (!ev) return "";
		const noFirma = osNoRequiereFirma(p.obraSocial);
		return (ev.evolucionoSistema ? "<span class=\"text-[10px] px-1.5 py-0.5 rounded bg-brand-100 text-brand-700 font-medium whitespace-nowrap\">✅ Sistema</span>" : "<span class=\"text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-medium whitespace-nowrap\">⏳ Sistema</span>") + (noFirma ? "<span class=\"text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-medium whitespace-nowrap\">📋 N/A</span>" : ev.firmoPlanillaOS ? "<span class=\"text-[10px] px-1.5 py-0.5 rounded bg-brand-100 text-brand-700 font-medium whitespace-nowrap\">✅ Planilla</span>" : "<span class=\"text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-medium whitespace-nowrap\">⏳ Planilla</span>");
	}
	function getLunesISOForDate(dateStr) {
		if (!dateStr) return null;
		const d = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
		const day = d.getDay();
		const diff = day === 0 ? -6 : 1 - day;
		d.setDate(d.getDate() + diff);
		return isoDate(d);
	}
	function getEmpresaColor(empresa) {
		if (!empresa) return "bg-slate-100 text-slate-600 border border-slate-200";
		const e = String(empresa).toLowerCase();
		if (e.includes("carehome")) return "bg-blue-100 text-blue-700 border border-blue-200";
		if (e.includes("palcare")) return "bg-emerald-100 text-emerald-700 border border-emerald-200";
		if (e.includes("cemic")) return "bg-purple-100 text-purple-700 border border-purple-200";
		if (e.includes("chad")) return "bg-orange-100 text-orange-700 border border-orange-200";
		if (e.includes("privado")) return "bg-amber-100 text-amber-700 border border-amber-200";
		return "bg-slate-100 text-slate-600 border border-slate-200";
	}
	function getVisitasForWeek(offset) {
		const lunes = getWeekStart(offset);
		const lunesISO = isoDate(lunes);
		const result = [];
		state.agenda.forEach((a) => {
			const hora = saneaHoraFront(a.horaInicio || "09:00");
			const rec = a.recurrente !== false;
			let aparece = false;
			let movidoA = null;
			if (rec) {
				const intervalo = a.intervaloSemanas || 1;
				let alineada = true;
				if (intervalo > 1 && a.fechaInicioRecurrencia) {
					const inicio = /* @__PURE__ */ new Date(String(a.fechaInicioRecurrencia).trim() + "T00:00:00");
					const actual = /* @__PURE__ */ new Date(lunesISO + "T00:00:00");
					const diffSemanas = Math.round((actual - inicio) / 6048e5);
					alineada = diffSemanas >= 0 && diffSemanas % intervalo === 0;
				}
				if (alineada) {
					const saltadaEntry = (a.semanasSaltadas || []).find((s) => (typeof s === "string" ? s : s.semana) === lunesISO);
					if (!saltadaEntry) aparece = true;
					else if (typeof saltadaEntry === "object" && saltadaEntry.movidoA) movidoA = saltadaEntry.movidoA;
				}
			} else if (a.semanaEspecifica && String(a.semanaEspecifica).trim() === lunesISO) aparece = true;
			const diaIdx = DIA_IDX[a.diaSemana];
			if (diaIdx === void 0) return;
			const fecha = new Date(lunes);
			fecha.setDate(lunes.getDate() + diaIdx);
			if (aparece) result.push({
				...a,
				pacienteId: String(a.pacienteId).trim(),
				horaInicio: hora,
				recurrente: rec,
				fechaVisitaSemana: isoDate(fecha),
				horaFinVisita: addMinutes(hora, DURACION_VISITA),
				horaLibre: addMinutes(hora, BLOQUE_TOTAL),
				turno: turnoDelDia(hora),
				movida: false
			});
			else if (movidoA) result.push({
				...a,
				pacienteId: String(a.pacienteId).trim(),
				horaInicio: hora,
				recurrente: rec,
				fechaVisitaSemana: isoDate(fecha),
				turno: turnoDelDia(hora),
				movida: true,
				movidoA,
				semanaMovidaKey: lunesISO
			});
		});
		return result;
	}
	function diaEstaComprimido(cantidadVisitasReales) {
		if (vistaGlobalOverride === "comprimida") return true;
		if (vistaGlobalOverride === "completa") return false;
		return cantidadVisitasReales > UMBRAL_COMPACTA;
	}
	function visitCardCompletaHtml(v, p, hoyISO) {
		const edad = calcEdad(p.fechaNacimiento);
		const turnoColor = v.turno === "mañana" ? "bg-amber-50 border-amber-200" : "bg-indigo-50 border-indigo-200";
		const empColor = getEmpresaColor(p.empresa);
		const puedeMarcarse = v.fechaVisitaSemana <= hoyISO;
		const estado = puedeMarcarse ? estadoHecha(v) : {
			hecha: false,
			manual: false
		};
		return `<div class="flex items-start justify-between gap-1 mb-1.5">
<div class="flex-1 min-w-0">
<div class="flex items-center gap-1.5">
<span class="time-badge text-sm font-bold text-brand-700">${v.horaInicio}</span>
<span class="text-[10px] text-slate-400">→</span>
<span class="time-badge text-[11px] text-slate-500">${v.horaLibre}</span>
${v.recurrente ? "<span class=\"text-[10px] text-slate-400\" title=\"Recurrente\">🔁</span>" : "<span class=\"text-[10px] text-indigo-500\" title=\"Visita puntual\">📌</span>"}
</div>
<p class="text-xs font-semibold text-slate-800 leading-tight truncate mt-0.5">${esc(p.nombre)}</p>
${edad !== null ? `<p class="text-[10px] text-slate-500">${edad} años</p>` : ""}
</div>
<div class="flex flex-col items-end gap-1">
<span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium ${empColor}">${esc(p.empresa || "Sin empresa")}</span>
${p.usaOpioides === "Sí" ? "<span class=\"text-[10px]\" title=\"Usa opioides\">💊</span>" : ""}
<span class="text-[9px] px-1 py-0.5 rounded ${turnoColor} font-medium">${v.turno === "mañana" ? "🌅" : "🌇"}</span>
</div>
</div>
${estado.hecha ? `<div class="mb-1 flex items-center gap-1">${chipHecha()}${estado.manual ? `<button data-action="desmarcar-hecha" data-id="${v.id}" data-fecha="${v.fechaVisitaSemana}" title="Quitar marca" class="text-[9px] text-slate-300 hover:text-slate-500">✕</button>` : ""}</div>` : puedeMarcarse ? `<button data-action="marcar-hecha" data-id="${v.id}" data-fecha="${v.fechaVisitaSemana}" class="mb-1 text-[9px] px-1.5 py-0.5 rounded-full border border-slate-200 text-slate-400 hover:border-brand-300 hover:text-brand-600 transition">☐ Marcar hecha</button>` : ""}
<div class="text-[10px] text-slate-500 space-y-0.5">
<p>🏠 <span class="truncate">${esc(p.direccion || "-")}</span>${p.piso ? " · " + esc(p.piso) : ""}</p>
${v.notasAgenda ? `<p class="italic">📝 ${esc(v.notasAgenda)}</p>` : ""}
</div>
<div class="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition">
<button data-action="evolucionar" data-agenda="${v.id}" data-fecha="${v.fechaVisitaSemana}" class="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-[10px] font-medium py-1 rounded">📝 Pendientes</button>
${mapsLinkPaciente(p) ? `<a href="${mapsLinkPaciente(p)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Cómo llegar" class="px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] rounded flex items-center justify-center">📍</a>` : ""}
<button data-action="abrir-mover" data-id="${v.id}" title="Mover a otro día" class="px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] rounded">↪️</button>
<button data-action="edit-agenda" data-id="${v.id}" class="px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] rounded">✏️</button>
</div>`;
	}
	function visitCompactaHtml(v, p, hoyISO) {
		const estado = v.fechaVisitaSemana <= hoyISO ? estadoHecha(v) : {
			hecha: false,
			manual: false
		};
		const nombreClass = estado.hecha ? "text-slate-400 line-through" : "text-slate-800";
		return `<div class="flex items-center gap-2 px-2.5 py-1.5 mb-1 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-brand-300 cursor-pointer transition" data-action="toggle-card-expandida" data-id="${v.id}">
<span class="time-badge text-[10px] font-semibold text-brand-700 flex-shrink-0">${v.horaInicio}</span>
<span class="text-[11px] ${nombreClass} truncate flex-1">${esc(p.nombre)}</span>
${estado.hecha ? "<span class=\"text-[9px] flex-shrink-0\" title=\"Marcada como hecha\">✅</span>" : ""}
${p.usaOpioides === "Sí" ? "<span class=\"text-[9px] flex-shrink-0\" title=\"Usa opioides\">💊</span>" : ""}
<span class="text-slate-300 text-[9px] flex-shrink-0">▾</span>
</div>`;
	}
	function actualizarBotonVista() {
		if (!document.getElementById("btn-toggle-vista")) return;
		const icon = document.getElementById("btn-toggle-vista-icon");
		const label = document.getElementById("btn-toggle-vista-label");
		if (vistaGlobalOverride === "comprimida") {
			icon.textContent = "🗂️";
			label.textContent = "Desplegar todo";
		} else {
			icon.textContent = "📋";
			label.textContent = "Comprimir todo";
		}
	}
	function renderAgendaDesktop() {
		actualizarBotonVista();
		const { lunes, domingo } = getWeekRange(weekOffset);
		const hoy = /* @__PURE__ */ new Date();
		hoy.setHours(0, 0, 0, 0);
		const hoyISO = isoDate(hoy);
		const header = document.getElementById("agenda-header");
		header.innerHTML = DIAS.map((d, i) => {
			const fecha = new Date(lunes);
			fecha.setDate(lunes.getDate() + i);
			const isToday = isoDate(fecha) === hoyISO;
			return `<div class="p-3 text-center border-l border-slate-200 ${isToday ? "bg-brand-50" : "bg-slate-50"}">
<p class="text-[10px] font-semibold text-slate-500 uppercase">${d.slice(0, 3)}</p>
<p class="text-sm font-bold ${isToday ? "text-brand-700" : "text-slate-800"}">${fecha.getDate()}</p>
</div>`;
		}).join("");
		const visitas = getVisitasForWeek(weekOffset);
		const pacientesMap = new Map(state.pacientes.map((p) => [String(p.id).trim(), p]));
		const grid = document.getElementById("agenda-grid");
		const porDia = {};
		DIAS.forEach((d) => porDia[d] = []);
		visitas.forEach((v) => {
			if (porDia[v.diaSemana]) porDia[v.diaSemana].push(v);
		});
		DIAS.forEach((d) => porDia[d].sort((a, b) => (a.horaInicio || "").localeCompare(b.horaInicio || "")));
		grid.innerHTML = DIAS.map((d, i) => {
			const fecha = new Date(lunes);
			fecha.setDate(lunes.getDate() + i);
			const isToday = isoDate(fecha) === hoyISO;
			const items = porDia[d];
			const realItems = items.filter((v) => !v.movida);
			const movedItems = items.filter((v) => v.movida);
			let html = `<div class="day-column p-2 ${isToday ? "today-col" : "bg-white"}">`;
			movedItems.forEach((v) => {
				html += chipMovida(v);
			});
			if (realItems.length === 0) html += `<button data-action="add-agenda" data-dia="${d}" class="w-full min-h-[80px] border-2 border-dashed border-slate-200 rounded-lg text-slate-300 hover:border-brand-300 hover:text-brand-500 text-xs transition flex items-center justify-center">+ visita</button>`;
			else {
				const mañana = realItems.filter((v) => v.turno === "mañana").length;
				const tarde = realItems.filter((v) => v.turno === "tarde").length;
				if (mañana > 0 || tarde > 0) html += `<div class="flex gap-1 mb-2 text-[9px]">
${mañana > 0 ? `<button type="button" data-action="ruta-turno" data-dia="${d}" data-turno="mañana" title="${esc(tituloRuta("mañana"))}" class="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded px-1 py-0.5 text-center font-medium">🌅 ${mañana} 🗺️</button>` : ""}
${tarde > 0 ? `<button type="button" data-action="ruta-turno" data-dia="${d}" data-turno="tarde" title="${esc(tituloRuta("tarde"))}" class="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded px-1 py-0.5 text-center font-medium">🌇 ${tarde} 🗺️</button>` : ""}
</div>`;
				const comprimido = diaEstaComprimido(realItems.length);
				realItems.forEach((v) => {
					const p = pacientesMap.get(String(v.pacienteId).trim()) || null;
					if (!p) {
						html += `<div class="visit-card bg-rose-50 border border-rose-200 rounded-lg p-2.5 mb-2">
<div class="flex items-center gap-2 mb-1">
<span class="text-rose-600 text-lg">⚠️</span>
<div><p class="text-xs font-bold text-rose-800">Paciente no encontrado</p><p class="text-[10px] text-rose-600">ID: ${esc(v.pacienteId)}</p></div>
</div>
<button data-action="delete-agenda" data-id="${v.id}" class="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium py-1.5 rounded">🗑️ Eliminar visita huérfana</button>
</div>`;
						return;
					}
					if (cardsToggleadas.has(v.id) ? !comprimido : comprimido) html += visitCompactaHtml(v, p, hoyISO);
					else html += `<div class="border border-slate-200 rounded-lg mb-2 bg-white overflow-hidden">
<div class="flex justify-end px-2 pt-1.5">
<button data-action="toggle-card-expandida" data-id="${v.id}" class="text-[9px] text-slate-400 hover:text-slate-600 flex items-center gap-0.5">▴ comprimir</button>
</div>
<div class="visit-card p-2.5 pt-0 cursor-pointer group relative" data-action="ver-agenda" data-id="${v.id}">
${visitCardCompletaHtml(v, p, hoyISO)}
</div>
</div>`;
				});
				html += `<button data-action="add-agenda" data-dia="${d}" class="w-full py-1.5 border border-dashed border-slate-200 rounded-lg text-slate-400 hover:border-brand-300 hover:text-brand-500 text-[10px] transition">+ agregar</button>`;
			}
			html += `</div>`;
			return html;
		}).join("");
	}
	function renderAgendaMobile() {
		const { lunes } = getWeekRange(weekOffset);
		const hoy = /* @__PURE__ */ new Date();
		hoy.setHours(0, 0, 0, 0);
		const hoyISO = isoDate(hoy);
		const todayIdx = getTodayDayIdx();
		const weekKey = weekOffset;
		if (selectedDayByWeek[weekKey] !== void 0) selectedDayMobile = selectedDayByWeek[weekKey];
		else if (selectedDayMobile === null || weekOffset !== 0) selectedDayMobile = weekOffset === 0 ? todayIdx : 0;
		if (selectedDayMobile < 0 || selectedDayMobile > 6) selectedDayMobile = 0;
		selectedDayByWeek[weekKey] = selectedDayMobile;
		const visitas = getVisitasForWeek(weekOffset);
		const pacientesMap = new Map(state.pacientes.map((p) => [String(p.id).trim(), p]));
		const countsByDia = {};
		DIAS.forEach((d) => countsByDia[d] = 0);
		visitas.forEach((v) => {
			if (!v.movida && countsByDia[v.diaSemana] !== void 0) countsByDia[v.diaSemana]++;
		});
		const tabs = document.getElementById("mobile-day-tabs");
		tabs.innerHTML = DIAS.map((d, i) => {
			const fecha = new Date(lunes);
			fecha.setDate(lunes.getDate() + i);
			const isToday = isoDate(fecha) === hoyISO;
			const isActive = i === selectedDayMobile;
			const count = countsByDia[d];
			return `<button data-action="select-day-mobile" data-day="${i}" class="day-tab ${isActive ? "active" : "bg-slate-50 text-slate-600 hover:bg-slate-100"} ${isToday && !isActive ? "today" : ""} rounded-lg py-2 px-1 flex flex-col items-center gap-0.5 transition">
<span class="text-[10px] font-bold uppercase">${DIAS_CORTO[i]}</span>
<span class="text-sm font-bold">${fecha.getDate()}</span>
${count > 0 ? `<span class="text-[9px] ${isActive ? "text-white/80" : "text-brand-600"} font-semibold">${count}</span>` : "<span class=\"text-[9px] text-slate-300\">·</span>"}
</button>`;
		}).join("");
		const diaNombre = DIAS[selectedDayMobile];
		const itemsDelDia = visitas.filter((v) => v.diaSemana === diaNombre).sort((a, b) => (a.horaInicio || "").localeCompare(b.horaInicio || ""));
		const items = itemsDelDia.filter((v) => !v.movida);
		const movidas = itemsDelDia.filter((v) => v.movida);
		const content = document.getElementById("mobile-day-content");
		const fecha = new Date(lunes);
		fecha.setDate(lunes.getDate() + selectedDayMobile);
		const isToday = isoDate(fecha) === hoyISO;
		const mañana = items.filter((v) => v.turno === "mañana");
		const tarde = items.filter((v) => v.turno === "tarde");
		let html = `<div class="flex items-center justify-between mb-4">
<div>
<h3 class="text-base font-bold text-slate-800">${diaNombre} ${fecha.getDate()}/${fecha.getMonth() + 1}</h3>
<p class="text-xs text-slate-500">${isToday ? "📍 Hoy" : items.length + " visita" + (items.length !== 1 ? "s" : "")}</p>
</div>
<button data-action="add-agenda" data-dia="${diaNombre}" class="bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
<span>➕</span> Agregar
</button>
</div>`;
		movidas.forEach((v) => {
			html += chipMovida(v);
		});
		if (items.length === 0) html += `<div class="text-center py-8 text-slate-400">
<p class="text-3xl mb-2">📭</p>
<p class="text-sm">Sin visitas este día</p>
<button data-action="add-agenda" data-dia="${diaNombre}" class="mt-3 text-xs text-brand-600 hover:text-brand-700 font-medium border border-brand-200 px-4 py-2 rounded-lg bg-brand-50">+ Agendar una visita</button>
</div>`;
		else {
			if (mañana.length > 0) html += `<div class="mb-4">
<div class="flex items-center justify-between mb-2 gap-2">
<p class="text-xs font-bold text-amber-700 uppercase tracking-wide flex items-center gap-1"><span>🌅</span> Mañana <span class="text-slate-400 font-normal">(${mañana.length})</span></p>
<button type="button" data-action="ruta-turno" data-dia="${diaNombre}" data-turno="mañana" title="${esc(tituloRuta("mañana"))}" class="text-[11px] font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg">🗺️ Ruta</button>
</div>
<div class="space-y-2">${mañana.map((v) => renderMobileVisitCard(v, pacientesMap)).join("")}</div>
</div>`;
			if (tarde.length > 0) html += `<div>
<div class="flex items-center justify-between mb-2 gap-2">
<p class="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center gap-1"><span>🌇</span> Tarde <span class="text-slate-400 font-normal">(${tarde.length})</span></p>
<button type="button" data-action="ruta-turno" data-dia="${diaNombre}" data-turno="tarde" title="${esc(tituloRuta("tarde"))}" class="text-[11px] font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-lg">🗺️ Ruta</button>
</div>
<div class="space-y-2">${tarde.map((v) => renderMobileVisitCard(v, pacientesMap)).join("")}</div>
</div>`;
			html += `<button data-action="add-agenda" data-dia="${diaNombre}" class="w-full mt-4 py-2.5 border border-dashed border-brand-300 text-brand-600 rounded-lg text-xs font-medium hover:bg-brand-50 transition flex items-center justify-center gap-1">
<span>➕</span> Agregar otra visita a este día
</button>`;
		}
		content.innerHTML = html;
	}
	function renderMobileVisitCard(v, pacientesMap = null) {
		const p = pacientesMap ? pacientesMap.get(String(v.pacienteId).trim()) || null : pacienteById(v.pacienteId);
		if (!p) return `<div class="border border-rose-200 bg-rose-50 rounded-xl p-3 mb-2">
<p class="text-xs font-bold text-rose-800 mb-1">⚠️ Paciente no encontrado</p>
<p class="text-[11px] text-rose-600 mb-2">ID: ${esc(v.pacienteId)}</p>
<button data-action="delete-agenda" data-id="${v.id}" class="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium py-1.5 rounded">🗑️ Eliminar</button>
</div>`;
		const edad = calcEdad(p.fechaNacimiento);
		const turnoColor = v.turno === "mañana" ? "border-amber-200 bg-amber-50/30" : "border-indigo-200 bg-indigo-50/30";
		const empColor = getEmpresaColor(p.empresa);
		const hoyISOCard = isoDate(/* @__PURE__ */ new Date());
		const puedeMarcarseCard = v.fechaVisitaSemana <= hoyISOCard;
		const estadoCard = puedeMarcarseCard ? estadoHecha(v) : {
			hecha: false,
			manual: false
		};
		return `<div class="border ${turnoColor} rounded-xl p-3 cursor-pointer hover:shadow-md transition" data-action="ver-agenda" data-id="${v.id}">
<div class="flex items-start justify-between gap-2 mb-2">
<div class="flex items-center gap-2">
<span class="time-badge text-lg font-bold text-brand-700">${v.horaInicio}</span>
<span class="text-xs text-slate-400">→</span>
<span class="time-badge text-sm text-slate-500">${v.horaLibre}</span>
${v.recurrente ? "<span class=\"text-xs text-slate-400\" title=\"Recurrente\">🔁</span>" : "<span class=\"text-xs text-indigo-500\" title=\"Visita puntual\">📌</span>"}
</div>
<div class="flex items-center gap-1">
<span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium ${empColor}">${esc(p.empresa || "Sin empresa")}</span>
${p.usaOpioides === "Sí" ? "<span class=\"text-xs\" title=\"Usa opioides\">💊</span>" : ""}
</div>
</div>
${estadoCard.hecha ? `<div class="mb-1.5 flex items-center gap-1">${chipHecha()}${estadoCard.manual ? `<button data-action="desmarcar-hecha" data-id="${v.id}" data-fecha="${v.fechaVisitaSemana}" title="Quitar marca" class="text-[10px] text-slate-300 hover:text-slate-500">✕</button>` : ""}</div>` : puedeMarcarseCard ? `<button data-action="marcar-hecha" data-id="${v.id}" data-fecha="${v.fechaVisitaSemana}" class="mb-1.5 text-[10px] px-2 py-0.5 rounded-full border border-slate-200 text-slate-400 hover:border-brand-300 hover:text-brand-600 transition">☐ Marcar hecha</button>` : ""}
<p class="text-sm font-bold text-slate-800 leading-tight">${esc(p.nombre)}</p>
<p class="text-xs text-slate-500 mt-0.5">${edad !== null ? edad + " años · " : ""}${esc(p.obraSocial || "")}</p>
<p class="text-xs text-slate-600 mt-2 flex items-start gap-1">
<span class="flex-shrink-0">🏠</span>
<span>${esc(p.direccion || "-")}${p.piso ? " · " + esc(p.piso) : ""}</span>
</p>
${p.contacto ? `<p class="text-xs text-slate-600 mt-0.5 flex items-start gap-1"><span class="flex-shrink-0">📞</span><span>${esc(p.contacto)}</span></p>` : ""}
${v.notasAgenda ? `<p class="text-xs text-slate-500 mt-2 italic bg-white/50 rounded px-2 py-1">📝 ${esc(v.notasAgenda)}</p>` : ""}
<div class="flex gap-2 mt-3">
<button data-action="abrir-mover" data-id="${v.id}" title="Mover a otro día" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-lg flex items-center justify-center">↪️</button>
<button data-action="evolucionar" data-agenda="${v.id}" data-fecha="${v.fechaVisitaSemana}" class="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium py-2 rounded-lg">📝 Pendientes</button>
${mapsLinkPaciente(p) ? `<a href="${mapsLinkPaciente(p)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-lg flex items-center justify-center">📍</a>` : ""}
<button data-action="edit-agenda" data-id="${v.id}" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-lg">✏️</button>
</div>
</div>`;
	}
	function renderPendingPanel() {
		const panel = document.getElementById("pending-panel");
		const visitas = getVisitasForWeek(weekOffset);
		const visitasPorPaciente = /* @__PURE__ */ new Map();
		visitas.forEach((v) => {
			if (v.movida) return;
			const pid = String(v.pacienteId).trim();
			visitasPorPaciente.set(pid, (visitasPorPaciente.get(pid) || 0) + 1);
		});
		const pacientesConVisita = new Set(visitasPorPaciente.keys());
		const activos = state.pacientes.filter((p) => p.estado !== "Fuera de seguimiento");
		if (activos.length === 0) {
			panel.innerHTML = "";
			return;
		}
		const selPendingEmpresaPrevio = document.getElementById("filter-pending-empresa");
		const filtroPendingEmpresa = selPendingEmpresaPrevio ? selPendingEmpresaPrevio.value : "";
		const opcionesEmpresaHtml = "<option value=\"\">Todas las empresas</option>" + [...new Set(activos.map((p) => p.empresa).filter(Boolean))].sort().map((e) => `<option value="${esc(e)}" ${e === filtroPendingEmpresa ? "selected" : ""}>${esc(e)}</option>`).join("");
		let pendientes = activos.filter((p) => !pacientesConVisita.has(String(p.id).trim()));
		let conVisita = activos.filter((p) => pacientesConVisita.has(String(p.id).trim()));
		if (filtroPendingEmpresa) {
			pendientes = pendientes.filter((p) => p.empresa === filtroPendingEmpresa);
			conVisita = conVisita.filter((p) => p.empresa === filtroPendingEmpresa);
		}
		const ordenados = [...pendientes.sort((a, b) => String(a.nombre || "").localeCompare(String(b.nombre || ""))), ...conVisita.sort((a, b) => String(a.nombre || "").localeCompare(String(b.nombre || "")))];
		const { lunes, domingo } = getWeekRange(weekOffset);
		let html = `<div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
<div>
<h3 class="text-sm font-bold text-slate-800">👥 Pacientes activos ${weekOffset === 0 ? "esta semana" : `del ${lunes.toLocaleDateString("es-AR", {
			day: "2-digit",
			month: "short"
		})} al ${domingo.toLocaleDateString("es-AR", {
			day: "2-digit",
			month: "short"
		})}`}</h3>
<p class="text-xs text-slate-500 mt-0.5">
${pendientes.length === 0 ? "<span class=\"text-brand-600 font-medium\">✓ Todos los pacientes tienen visita agendada</span>" : `<span class="text-amber-600 font-medium">${pendientes.length} sin agenda</span> · ${conVisita.length} con visita`}
</p>
</div>
<select id="filter-pending-empresa" class="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-brand-500 bg-white">
${opcionesEmpresaHtml}
</select>
</div>
<div class="divide-y divide-slate-100 max-h-96 overflow-y-auto scrollbar-thin">`;
		ordenados.forEach((p) => {
			const pid = String(p.id).trim();
			const done = pacientesConVisita.has(pid);
			const nVisitas = visitasPorPaciente.get(pid) || 0;
			const empColor = getEmpresaColor(p.empresa);
			html += `<div class="pending-item ${done ? "done" : ""} flex items-center gap-3 p-3 hover:bg-slate-50 transition ${done ? "" : "cursor-pointer"}" ${done ? "" : `data-action="add-agenda-paciente-pending" data-id="${p.id}"`}>
<div class="flex-shrink-0 w-8 h-8 rounded-full ${done ? "bg-brand-100 text-brand-700" : "bg-amber-100 text-amber-700"} flex items-center justify-center text-xs font-bold">
${done ? "✓" : String(p.nombre || "?").charAt(0).toUpperCase()}
</div>
<div class="flex-1 min-w-0">
<p class="pending-name text-sm font-medium text-slate-800 truncate">${esc(p.nombre)}</p>
<p class="text-xs text-slate-500 truncate flex items-center gap-1">
<span class="flex-shrink-0">🏠</span>
<span class="truncate">${esc(p.direccion || "Sin dirección")}${p.piso ? " · " + esc(p.piso) : ""}</span>
${mapsLinkPaciente(p) ? `<a href="${mapsLinkPaciente(p)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="flex-shrink-0 text-brand-500 hover:text-brand-700" title="Cómo llegar">📍</a>` : ""}
</p>
<div class="mt-1">${chipUltimaVisita(p.id)}</div>
</div>
<div class="flex-shrink-0 flex flex-col items-end gap-1">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${empColor}">${esc(p.empresa || "Sin empresa")}</span>
${done ? `<span class="text-[10px] text-slate-400">${nVisitas} visita${nVisitas > 1 ? "s" : ""}</span>` : `<span class="text-xs text-brand-600 font-medium whitespace-nowrap">+ Agendar</span>`}
</div>
</div>`;
		});
		html += `</div>`;
		panel.innerHTML = html;
		document.getElementById("filter-pending-empresa")?.addEventListener("change", renderPendingPanel);
	}
	function renderAgenda() {
		const { lunes, domingo } = getWeekRange(weekOffset);
		const isCurrentWeek = weekOffset === 0;
		document.getElementById("agenda-week-label").textContent = `Semana del ${lunes.toLocaleDateString("es-AR", {
			day: "2-digit",
			month: "short"
		})} al ${domingo.toLocaleDateString("es-AR", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		})}`;
		document.getElementById("agenda-week-sublabel").textContent = isCurrentWeek ? "📍 Semana actual" : weekOffset > 0 ? `+${weekOffset} semana${weekOffset > 1 ? "s" : ""}` : `${Math.abs(weekOffset)} semana${weekOffset < -1 ? "s" : ""} atrás`;
		renderAgendaDesktop();
		renderAgendaMobile();
		renderPendingPanel();
		const visitas = getVisitasForWeek(weekOffset).filter((v) => !v.movida);
		const totalVisitas = visitas.length;
		const totalMin = visitas.length * BLOQUE_TOTAL;
		document.getElementById("stat-week").textContent = totalVisitas;
		document.getElementById("stat-hours").textContent = `${Math.floor(totalMin / 60)}h${totalMin % 60 ? " " + totalMin % 60 + "m" : ""}`;
		document.getElementById("stat-active").textContent = state.pacientes.filter((p) => p.estado === "Activo").length;
		document.getElementById("stat-opioides").textContent = state.pacientes.filter((p) => p.usaOpioides === "Sí").length;
	}
	function updatePacienteFilters() {
		const empresas = [...new Set(state.pacientes.map((p) => p.empresa).filter(Boolean))].sort();
		const os = [...new Set(state.pacientes.map((p) => p.obraSocial).filter(Boolean))].sort();
		const selEmpresa = document.getElementById("filter-empresa");
		const selOS = document.getElementById("filter-os");
		if (selEmpresa) {
			const curr = selEmpresa.value;
			selEmpresa.innerHTML = "<option value=\"\">Todas las empresas</option>" + empresas.map((e) => `<option value="${esc(e)}" ${e === curr ? "selected" : ""}>${esc(e)}</option>`).join("");
		}
		if (selOS) {
			const curr = selOS.value;
			selOS.innerHTML = "<option value=\"\">Todas las Obras Sociales</option>" + os.map((o) => `<option value="${esc(o)}" ${o === curr ? "selected" : ""}>${esc(o)}</option>`).join("");
		}
	}
	function getFilteredPacientes() {
		const q = (document.getElementById("search-pacientes").value || "").toLowerCase().trim();
		const filtroEstado = document.getElementById("filter-estado").value;
		const filtroEmpresa = document.getElementById("filter-empresa").value;
		const filtroOS = document.getElementById("filter-os").value;
		return state.pacientes.filter((p) => {
			if (filtroEstado && p.estado !== filtroEstado) return false;
			if (filtroEmpresa && p.empresa !== filtroEmpresa) return false;
			if (filtroOS && p.obraSocial !== filtroOS) return false;
			if (!q) return true;
			return String(p.nombre || "").toLowerCase().includes(q) || String(p.dni || "").toLowerCase().includes(q) || String(p.obraSocial || "").toLowerCase().includes(q) || String(p.empresa || "").toLowerCase().includes(q) || String(p.contacto || "").toLowerCase().includes(q) || String(p.direccion || "").toLowerCase().includes(q);
		});
	}
	function renderPacientes() {
		updatePacienteFilters();
		const filtered = getFilteredPacientes();
		const container = document.getElementById("pacientes-container");
		if (filtered.length === 0) {
			container.innerHTML = `<div class="text-center py-12 text-slate-400"><p class="text-4xl mb-2">🔍</p><p class="text-sm">No se encontraron pacientes</p></div>`;
			return;
		}
		if (state.viewMode === "list") container.innerHTML = renderPacientesLista(filtered);
		else container.innerHTML = renderPacientesCards(filtered);
	}
	function renderPacientesCards(filtered) {
		return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${filtered.map((p) => {
			const edad = calcEdad(p.fechaNacimiento);
			const estadoColor = p.estado === "Activo" ? "bg-brand-100 text-brand-700 border-brand-200" : p.estado === "Intermitente" ? "bg-amber-100 text-amber-700 border-amber-200" : "bg-slate-100 text-slate-500 border-slate-200";
			const { agenda: vAg, evoluciones: nEv } = contarAgendaEvoluciones(p.id);
			const osBadge = osNoRequiereFirma(p.obraSocial) ? `<span class="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">📋 ${esc(p.obraSocial)}</span>` : "";
			const empColor = getEmpresaColor(p.empresa);
			return `<div class="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition cursor-pointer" data-action="ver-paciente" data-id="${p.id}">
<div class="flex items-start justify-between gap-3 mb-3">
<div class="flex-1 min-w-0"><h3 class="font-bold text-slate-800 truncate">${esc(p.nombre)}</h3><p class="text-xs text-slate-500">${esc(p.dni || "Sin DNI")} ${edad !== null ? "· " + edad + " años" : ""}</p></div>
<span class="text-xs font-medium px-2 py-1 rounded-full border ${estadoColor} whitespace-nowrap">${p.estado}</span>
</div>
${p.estado !== "Fuera de seguimiento" ? `<div class="flex flex-wrap items-center gap-1.5 mb-3">${chipUltimaVisita(p.id)}${chipsChecklistAdmin(p)}</div>` : ""}
<div class="space-y-1.5 text-xs text-slate-600">
<p class="truncate">🏠 ${esc(p.direccion || "-")} ${p.piso ? "· " + esc(p.piso) : ""}</p>
<p class="truncate flex items-center gap-2">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${empColor}">${esc(p.empresa || "Sin empresa")}</span>
<span>${esc(p.obraSocial || "-")}</span> ${p.numeroAfiliado ? "· " + esc(p.numeroAfiliado) : ""}
</p>
<p class="truncate">📞 ${esc(p.contacto || "-")}</p>
</div>
<div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
<div class="flex gap-3 text-xs"><span class="text-slate-500">🔁 ${vAg}</span><span class="text-slate-500">📝 ${nEv}</span>${osBadge}</div>
${p.usaOpioides === "Sí" ? "<span class=\"text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-medium\">💊 Opioides</span>" : ""}
</div></div>`;
		}).join("")}</div>`;
	}
	function renderPacientesLista(filtered) {
		return `<div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead class="bg-slate-50 border-b border-slate-200 sticky top-0">
<tr>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Paciente</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">DNI / Edad</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden lg:table-cell">Dirección</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">Empresa / OS</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Estado</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">Última visita</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">🔁</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">📝</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100">
${filtered.map((p) => {
			const edad = calcEdad(p.fechaNacimiento);
			const estadoColor = p.estado === "Activo" ? "bg-brand-100 text-brand-700" : p.estado === "Intermitente" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500";
			const { agenda: vAg, evoluciones: nEv } = contarAgendaEvoluciones(p.id);
			const empColor = getEmpresaColor(p.empresa);
			return `<tr class="lista-row cursor-pointer hover:bg-slate-50" data-action="ver-paciente" data-id="${p.id}">
<td class="px-4 py-3">
<div class="flex items-center gap-2">
<div class="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${String(p.nombre || "?").charAt(0).toUpperCase()}</div>
<div class="min-w-0">
<p class="font-semibold text-slate-800 truncate">${esc(p.nombre)}</p>
<p class="text-[11px] text-slate-500 truncate md:hidden">${esc(p.dni || "")}${edad ? " · " + edad + "a" : ""} · ${esc(p.obraSocial || "")}</p>
</div>
${p.usaOpioides === "Sí" ? "<span class=\"text-xs\" title=\"Usa opioides\">💊</span>" : ""}
</div>
</td>
<td class="px-4 py-3 text-xs text-slate-600 hidden md:table-cell">${esc(p.dni || "-")}${edad !== null ? "<br><span class=\"text-slate-400\">" + edad + " años</span>" : ""}</td>
<td class="px-4 py-3 text-xs text-slate-600 hidden lg:table-cell max-w-[200px] truncate" title="${esc((p.direccion || "") + (p.piso ? " · " + p.piso : ""))}">${esc(p.direccion || "-")}${p.piso ? " · " + esc(p.piso) : ""}</td>
<td class="px-4 py-3 text-xs hidden md:table-cell">
<div class="flex flex-col gap-1">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium w-fit ${empColor}">${esc(p.empresa || "Sin empresa")}</span>
<span class="text-slate-700">${esc(p.obraSocial || "-")}</span>
</div>
</td>
<td class="px-4 py-3"><span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${estadoColor}">${p.estado}</span></td>
<td class="px-4 py-3 hidden sm:table-cell">${p.estado !== "Fuera de seguimiento" ? chipUltimaVisita(p.id) : ""}</td>
<td class="px-4 py-3 text-center text-xs text-slate-600 hidden sm:table-cell">${vAg}</td>
<td class="px-4 py-3 text-center text-xs text-slate-600 hidden sm:table-cell">${nEv}</td>
</tr>`;
		}).join("")}
</tbody>
</table>
</div>
<div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
${filtered.length} paciente${filtered.length !== 1 ? "s" : ""}
</div>
</div>`;
	}
	function renderVisitas() {
		const q = (document.getElementById("search-visitas").value || "").toLowerCase().trim();
		const list = document.getElementById("visitas-list");
		const pacientesMap = new Map(state.pacientes.map((p) => [String(p.id).trim(), p]));
		const filtered = [...state.evoluciones].sort((a, b) => (b.fechaVisita || "").localeCompare(a.fechaVisita || "")).map((e) => ({
			e,
			p: pacientesMap.get(String(e.pacienteId).trim()) || null
		})).filter(({ e, p }) => {
			if (!q) return true;
			return String(p?.nombre || "").toLowerCase().includes(q) || String(e.notas || "").toLowerCase().includes(q);
		});
		if (filtered.length === 0) {
			list.innerHTML = `<div class="text-center py-12 text-slate-400"><p class="text-4xl mb-2">📝</p><p class="text-sm">No hay pendientes cargados</p></div>`;
			return;
		}
		list.innerHTML = filtered.map(({ e, p }) => {
			const noFirma = osNoRequiereFirma(p?.obraSocial);
			return `<div class="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
<div class="flex flex-wrap items-start justify-between gap-3 mb-3">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">${String(p?.nombre || "?").charAt(0).toUpperCase()}</div>
<div><h4 class="font-semibold text-slate-800">${esc(p?.nombre || "Paciente eliminado")}</h4><p class="text-xs text-slate-500">📅 ${fmtFecha(e.fechaVisita)} ${p?.obraSocial ? "· " + esc(p.obraSocial) : ""}</p></div>
</div>
<div class="flex gap-2">
<button data-action="toggle-sistema" data-id="${e.id}" title="Tocar para marcar/desmarcar" class="text-xs px-2 py-1 rounded-full transition ${e.evolucionoSistema ? "bg-brand-100 text-brand-700 hover:bg-brand-200" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}">${e.evolucionoSistema ? "✓ Sistema" : "○ Sistema"}</button>
${noFirma ? "<span class=\"text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600\" title=\"OSDE/CEMIC no requiere planilla\">📋 N/A</span>" : `<button data-action="toggle-firma" data-id="${e.id}" title="Tocar para marcar/desmarcar" class="text-xs px-2 py-1 rounded-full transition ${e.firmoPlanillaOS ? "bg-brand-100 text-brand-700 hover:bg-brand-200" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}">${e.firmoPlanillaOS ? "✓ Firma" : "○ Firma"}</button>`}
</div>
</div>
<p class="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">${e.notas ? esc(e.notas) : "<em class=\"text-slate-400\">Sin notas</em>"}</p>
<div class="flex justify-end mt-3 pt-3 border-t border-slate-100"><button data-action="delete-evolucion" data-id="${e.id}" class="text-xs text-rose-600 hover:text-rose-700 font-medium">Eliminar</button></div>
</div>`;
		}).join("");
	}
	function renderAll() {
		renderAgenda();
		renderPacientes();
		renderVisitas();
		renderPlanilla();
	}
	let monthOffset = 0;
	function getMonthRange(offset = 0) {
		const now = /* @__PURE__ */ new Date();
		const d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
		const year = d.getFullYear();
		const month = d.getMonth();
		let label = d.toLocaleDateString("es-AR", {
			month: "long",
			year: "numeric"
		});
		label = label.charAt(0).toUpperCase() + label.slice(1);
		return {
			year,
			month,
			label
		};
	}
	function estaEnMes(fecha, year, month) {
		if (!fecha) return false;
		const d = /* @__PURE__ */ new Date(String(fecha).trim() + "T00:00:00");
		if (isNaN(d.getTime())) return false;
		return d.getFullYear() === year && d.getMonth() === month;
	}
	function visitasRealizadasDelMes(offset) {
		const { year, month } = getMonthRange(offset);
		const resultado = [];
		const yaContadas = /* @__PURE__ */ new Set();
		state.evoluciones.forEach((e) => {
			if (!estaEnMes(e.fechaVisita, year, month)) return;
			const pid = String(e.pacienteId).trim();
			const fecha = String(e.fechaVisita).trim();
			const key = pid + "|" + fecha;
			if (yaContadas.has(key)) return;
			yaContadas.add(key);
			resultado.push({
				pacienteId: pid,
				fecha,
				origen: "evolucion",
				evolucionoSistema: e.evolucionoSistema,
				firmoPlanillaOS: e.firmoPlanillaOS
			});
		});
		state.agenda.forEach((a) => {
			if (!a.fechasHechas) return;
			const pid = String(a.pacienteId).trim();
			a.fechasHechas.forEach((fecha) => {
				fecha = String(fecha).trim();
				if (!estaEnMes(fecha, year, month)) return;
				const key = pid + "|" + fecha;
				if (yaContadas.has(key)) return;
				yaContadas.add(key);
				resultado.push({
					pacienteId: pid,
					fecha,
					origen: "manual",
					evolucionoSistema: null,
					firmoPlanillaOS: null
				});
			});
		});
		return resultado;
	}
	function tarifaEmpresa(empresa) {
		const t = state.tarifas.find((x) => x.empresa === empresa);
		return t ? Number(t.valorPorVisita) || 0 : 0;
	}
	function guardarTarifa(empresa, valor) {
		const num = Number(valor) || 0;
		const idx = state.tarifas.findIndex((x) => x.empresa === empresa);
		let row;
		if (idx >= 0) {
			state.tarifas[idx].valorPorVisita = num;
			row = state.tarifas[idx];
		} else {
			row = {
				empresa,
				valorPorVisita: num
			};
			state.tarifas.push(row);
		}
		saveLocal();
		pushTarifa(row);
	}
	function fmtMoneyARS(n) {
		return new Intl.NumberFormat("es-AR", {
			style: "currency",
			currency: "ARS",
			maximumFractionDigits: 0
		}).format(n || 0);
	}
	function renderPlanilla() {
		const { label } = getMonthRange(monthOffset);
		document.getElementById("planilla-mes-label").textContent = label;
		const pacientesMap = new Map(state.pacientes.map((p) => [String(p.id).trim(), p]));
		const evs = visitasRealizadasDelMes(monthOffset).map((v) => ({
			v,
			p: pacientesMap.get(v.pacienteId) || null
		}));
		const empresasSet = new Set(state.pacientes.map((p) => p.empresa).filter(Boolean));
		state.tarifas.forEach((t) => {
			if (t.empresa) empresasSet.add(t.empresa);
		});
		const empresas = [...empresasSet].sort();
		const countsPorEmpresa = {};
		empresas.forEach((emp) => countsPorEmpresa[emp] = 0);
		let sinEmpresa = 0;
		evs.forEach(({ p }) => {
			const emp = p?.empresa;
			if (emp && countsPorEmpresa[emp] !== void 0) countsPorEmpresa[emp]++;
			else sinEmpresa++;
		});
		const cardsCont = document.getElementById("planilla-cards");
		let totalGeneral = 0;
		let cardsHtml = empresas.map((emp) => {
			const count = countsPorEmpresa[emp] || 0;
			const valor = tarifaEmpresa(emp);
			const total = count * valor;
			totalGeneral += total;
			return `<div class="bg-white rounded-xl border border-slate-200 p-3">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${getEmpresaColor(emp)}">${esc(emp)}</span>
<p class="text-xl font-bold text-slate-800 mt-2">${count} <span class="text-xs font-normal text-slate-400">visitas</span></p>
<div class="flex items-center gap-1 mt-2">
<span class="text-[11px] text-slate-400">$</span>
<input data-tarifa-empresa="${esc(emp)}" type="number" min="0" step="500" value="${valor}" class="w-full px-2 py-1 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-brand-500">
</div>
<p class="text-xs font-semibold text-brand-700 mt-1.5">${fmtMoneyARS(total)}</p>
</div>`;
		}).join("");
		if (sinEmpresa > 0) cardsHtml += `<div class="bg-white rounded-xl border border-slate-200 p-3">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-slate-100 text-slate-600 border border-slate-200">Sin empresa</span>
<p class="text-xl font-bold text-slate-800 mt-2">${sinEmpresa} <span class="text-xs font-normal text-slate-400">visitas</span></p>
<p class="text-[11px] text-slate-400 mt-2">Cargá la empresa del paciente para facturar</p>
</div>`;
		cardsHtml += `<div class="bg-brand-600 rounded-xl p-3 text-white">
<span class="text-[10px] font-medium opacity-80">Total del mes</span>
<p class="text-xl font-bold mt-2">${evs.length} <span class="text-xs font-normal opacity-80">visitas</span></p>
<p class="text-xs font-semibold mt-6">${fmtMoneyARS(totalGeneral)}</p>
</div>`;
		cardsCont.innerHTML = cardsHtml;
		cardsCont.querySelectorAll("[data-tarifa-empresa]").forEach((inp) => {
			inp.addEventListener("change", () => {
				guardarTarifa(inp.dataset.tarifaEmpresa, inp.value);
				renderPlanilla();
			});
		});
		const selFiltro = document.getElementById("planilla-filter-empresa");
		const filtroEmpresaActual = selFiltro.value;
		selFiltro.innerHTML = "<option value=\"\">Todas las empresas</option>" + empresas.map((emp) => `<option value="${esc(emp)}" ${emp === filtroEmpresaActual ? "selected" : ""}>${esc(emp)}</option>`).join("");
		selFiltro.value = filtroEmpresaActual;
		const soloPendientes = document.getElementById("planilla-solo-pendientes").checked;
		let filas = evs.filter(({ p }) => !filtroEmpresaActual || p?.empresa === filtroEmpresaActual);
		if (soloPendientes) filas = filas.filter(({ v, p }) => {
			if (v.origen === "manual") return false;
			const noFirma = osNoRequiereFirma(p?.obraSocial);
			return !v.evolucionoSistema || !noFirma && !v.firmoPlanillaOS;
		});
		filas.sort((a, b) => String(b.v.fecha || "").localeCompare(String(a.v.fecha || "")));
		const wrap = document.getElementById("planilla-table-wrap");
		if (filas.length === 0) wrap.innerHTML = `<div class="text-center py-12 text-slate-400"><p class="text-4xl mb-2">📭</p><p class="text-sm">Sin visitas para este filtro</p></div>`;
		else wrap.innerHTML = `<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead class="bg-slate-50 border-b border-slate-200">
<tr>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Fecha</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Paciente</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">Empresa</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Sistema</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Firma</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100">
${filas.map(({ v, p }) => {
			const noFirma = osNoRequiereFirma(p?.obraSocial);
			const empColor = getEmpresaColor(p?.empresa);
			const esManual = v.origen === "manual";
			const celdaSistema = esManual ? "<span class=\"text-[10px] text-slate-400\" title=\"Marcada como hecha a mano, sin evolución cargada\">✋</span>" : v.evolucionoSistema ? "<span class=\"text-brand-600\">✅</span>" : "<span class=\"text-amber-600\">⏳</span>";
			const celdaFirma = esManual ? "<span class=\"text-slate-300\">—</span>" : noFirma ? "<span class=\"text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded\">N/A</span>" : v.firmoPlanillaOS ? "<span class=\"text-brand-600\">✅</span>" : "<span class=\"text-amber-600\">⏳</span>";
			return `<tr class="hover:bg-slate-50">
<td class="px-4 py-3 text-xs text-slate-600 whitespace-nowrap">${fmtFechaCorta(v.fecha)}</td>
<td class="px-4 py-3 text-sm font-medium text-slate-800">${esc(p?.nombre || "Paciente eliminado")}</td>
<td class="px-4 py-3 hidden sm:table-cell"><span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${empColor}">${esc(p?.empresa || "Sin empresa")}</span></td>
<td class="px-4 py-3 text-center">${celdaSistema}</td>
<td class="px-4 py-3 text-center">${celdaFirma}</td>
</tr>`;
		}).join("")}
</tbody>
</table>
</div>
<div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">${filas.length} visita${filas.length !== 1 ? "s" : ""}</div>`;
	}
	function updateViewToggleUI() {
		const btnCards = document.getElementById("view-cards");
		const btnList = document.getElementById("view-list");
		if (state.viewMode === "list") {
			btnCards.classList.remove("active");
			btnList.classList.add("active");
		} else {
			btnCards.classList.add("active");
			btnList.classList.remove("active");
		}
	}
	document.getElementById("view-cards").addEventListener("click", () => {
		state.viewMode = "cards";
		saveLocal();
		updateViewToggleUI();
		renderPacientes();
	});
	document.getElementById("view-list").addEventListener("click", () => {
		state.viewMode = "list";
		saveLocal();
		updateViewToggleUI();
		renderPacientes();
	});
	function openModalPaciente(id = null) {
		document.getElementById("form-paciente").reset();
		document.getElementById("pac-id").value = "";
		if (id) {
			const p = pacienteById(id);
			if (!p) return;
			document.getElementById("modal-paciente-title").textContent = "Editar Paciente";
			document.getElementById("pac-id").value = p.id;
			document.getElementById("pac-nombre").value = p.nombre || "";
			document.getElementById("pac-dni").value = p.dni || "";
			document.getElementById("pac-nac").value = p.fechaNacimiento || "";
			document.getElementById("pac-direccion").value = p.direccion || "";
			document.getElementById("pac-piso").value = p.piso || "";
			document.getElementById("pac-empresa").value = p.empresa || "";
			document.getElementById("pac-os").value = p.obraSocial || "";
			document.getElementById("pac-afiliado").value = p.numeroAfiliado || "";
			document.getElementById("pac-contacto").value = p.contacto || "";
			document.getElementById("pac-estado").value = p.estado || "Activo";
			document.getElementById("pac-opioides").value = p.usaOpioides || "No";
		} else document.getElementById("modal-paciente-title").textContent = "Nuevo Paciente";
		document.getElementById("modal-paciente").classList.remove("hidden");
	}
	document.getElementById("form-paciente").addEventListener("submit", async (e) => {
		e.preventDefault();
		const id = document.getElementById("pac-id").value;
		const data = {
			nombre: document.getElementById("pac-nombre").value.trim(),
			dni: document.getElementById("pac-dni").value.trim(),
			fechaNacimiento: document.getElementById("pac-nac").value,
			direccion: document.getElementById("pac-direccion").value.trim(),
			piso: document.getElementById("pac-piso").value.trim(),
			empresa: document.getElementById("pac-empresa").value.trim(),
			obraSocial: document.getElementById("pac-os").value.trim(),
			numeroAfiliado: document.getElementById("pac-afiliado").value.trim(),
			contacto: document.getElementById("pac-contacto").value.trim(),
			estado: document.getElementById("pac-estado").value,
			usaOpioides: document.getElementById("pac-opioides").value
		};
		let row;
		if (id) {
			const idx = state.pacientes.findIndex((p) => sameId(p.id, id));
			if (idx >= 0) {
				state.pacientes[idx] = {
					...state.pacientes[idx],
					...data
				};
				row = state.pacientes[idx];
			}
			toast("Paciente actualizado");
		} else {
			row = {
				id: uid(),
				...data
			};
			state.pacientes.push(row);
			toast("Paciente creado");
		}
		saveLocal();
		pushRow("Pacientes", row);
		closeModal("modal-paciente");
		renderAll();
	});
	function openModalDetalle(id) {
		const p = pacienteById(id);
		if (!p) return;
		const edad = calcEdad(p.fechaNacimiento);
		const evs = state.evoluciones.filter((e) => sameId(e.pacienteId, p.id)).sort((a, b) => (b.fechaVisita || "").localeCompare(a.fechaVisita || ""));
		const ags = state.agenda.filter((a) => sameId(a.pacienteId, p.id));
		const noFirma = osNoRequiereFirma(p.obraSocial);
		const empColor = getEmpresaColor(p.empresa);
		document.getElementById("detalle-content").innerHTML = `
<div class="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center text-2xl font-bold">${String(p.nombre || "?").charAt(0).toUpperCase()}</div>
<div>
<h3 class="text-xl font-bold text-slate-800">${esc(p.nombre)}</h3>
<p class="text-sm text-slate-500">${esc(p.dni || "Sin DNI")} ${edad !== null ? "· " + edad + " años" : ""}</p>
<div class="flex gap-2 mt-1">
<span class="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700">${p.estado}</span>
<span class="inline-block text-xs font-medium px-2 py-0.5 rounded-full ${empColor}">${esc(p.empresa || "Sin empresa")}</span>
</div>
${p.estado !== "Fuera de seguimiento" ? `<div class="flex flex-wrap gap-1.5 mt-2">${chipUltimaVisita(p.id)}${chipsChecklistAdmin(p)}</div>` : ""}
</div>
</div>
<div class="flex gap-2">
${mapsLinkPaciente(p) ? `<a href="${mapsLinkPaciente(p)}" target="_blank" rel="noopener" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 flex items-center gap-1">📍 Cómo llegar</a>` : ""}
<button data-action="edit-paciente" data-id="${p.id}" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700">✏️ Editar</button>
<button data-action="delete-paciente" data-id="${p.id}" class="px-3 py-2 bg-rose-50 hover:bg-rose-100 rounded-lg text-sm font-medium text-rose-600">🗑️ Eliminar</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div class="space-y-2"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Datos personales</h4><div class="bg-slate-50 rounded-xl p-3 space-y-1.5 text-sm"><p><span class="text-slate-500">Dirección:</span> <strong>${esc(p.direccion || "-")}</strong> ${p.piso ? "· " + esc(p.piso) : ""}</p><p><span class="text-slate-500">Nacimiento:</span> <strong>${fmtFecha(p.fechaNacimiento)}</strong></p><p><span class="text-slate-500">Contacto:</span> <strong>${esc(p.contacto || "-")}</strong></p></div></div>
<div class="space-y-2"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Cobertura</h4><div class="bg-slate-50 rounded-xl p-3 space-y-1.5 text-sm"><p><span class="text-slate-500">Obra Social:</span> <strong>${esc(p.obraSocial || "-")}</strong> ${noFirma ? "<span class=\"ml-1 text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded\">No requiere planilla</span>" : ""}</p><p><span class="text-slate-500">Nº Afiliado:</span> <strong>${esc(p.numeroAfiliado || "-")}</strong></p><p><span class="text-slate-500">Opioides:</span> <strong class="${p.usaOpioides === "Sí" ? "text-amber-600" : "text-slate-700"}">${p.usaOpioides}</strong></p></div></div>
</div>
<div class="mb-5"><div class="flex items-center justify-between mb-3"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Agenda (${ags.length})</h4><button data-action="add-agenda-paciente" data-id="${p.id}" class="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium">+ Agendar</button></div>${ags.length === 0 ? "<p class=\"text-sm text-slate-400 italic\">Sin visitas agendadas</p>" : `<div class="space-y-2">${ags.map((a) => {
			const hora = a.horaInicio || "--:--";
			const rec = a.recurrente !== false;
			const libre = addMinutes(hora, BLOQUE_TOTAL);
			const tipo = rec ? "<span class=\"text-[10px] text-brand-600\">🔁 recurrente</span>" : "<span class=\"text-[10px] text-indigo-600\">📌 puntual</span>";
			return `<div class="bg-brand-50 border border-brand-200 rounded-lg px-3 py-2 text-xs flex items-center justify-between"><div><strong class="text-brand-800">${a.diaSemana}</strong> · <span class="time-badge">${hora} - ${libre}</span> ${tipo}${a.notasAgenda ? `<p class="text-slate-600 mt-0.5 italic">📝 ${esc(a.notasAgenda)}</p>` : ""}</div><button data-action="edit-agenda" data-id="${a.id}" class="text-slate-500 hover:text-slate-700">✏️</button></div>`;
		}).join("")}</div>`}</div>
<div><div class="flex items-center justify-between mb-3"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Pendientes (${evs.length})</h4><button data-action="new-evolucion-paciente" data-id="${p.id}" class="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium">+ Nuevo pendiente</button></div>${evs.length === 0 ? "<p class=\"text-sm text-slate-400 italic\">Sin pendientes cargados</p>" : `<div class="space-y-3">${evs.map((e) => {
			const firmaBadge = noFirma ? "<span class=\"text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700\">📋 N/A</span>" : `<span class="text-[10px] px-1.5 py-0.5 rounded ${e.firmoPlanillaOS ? "bg-brand-100 text-brand-700" : "bg-slate-200 text-slate-500"}">${e.firmoPlanillaOS ? "✓ Firma" : "○ Firma"}</span>`;
			return `<div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><div class="flex items-center justify-between mb-2"><p class="text-xs font-semibold text-slate-700">📅 ${fmtFecha(e.fechaVisita)}</p><div class="flex gap-1.5"><span class="text-[10px] px-1.5 py-0.5 rounded ${e.evolucionoSistema ? "bg-brand-100 text-brand-700" : "bg-slate-200 text-slate-500"}">${e.evolucionoSistema ? "✓ Sist." : "○ Sist."}</span>${firmaBadge}</div></div><p class="text-sm text-slate-700 whitespace-pre-wrap">${e.notas ? esc(e.notas) : "<em class=\"text-slate-400\">Sin notas</em>"}</p></div>`;
		}).join("")}</div>`}</div>`;
		document.getElementById("modal-detalle").classList.remove("hidden");
	}
	function updateHoraPreview() {
		const libre = addMinutes(document.getElementById("ag-hora").value || "09:00", BLOQUE_TOTAL);
		document.getElementById("ag-hora-preview").textContent = `Libre: ${libre}`;
	}
	function updateFechaPreview() {
		const dia = document.getElementById("ag-dia").value;
		const fechaInput = document.getElementById("ag-fecha");
		const previewText = document.getElementById("ag-fecha-preview-text");
		const recurrenteDia = document.getElementById("ag-recurrente-dia");
		const recurrente = document.getElementById("ag-recurrente").checked;
		const intervaloWrap = document.getElementById("ag-intervalo-wrap");
		const intervalo = parseInt(document.getElementById("ag-intervalo").value, 10) || 1;
		recurrenteDia.textContent = dia.toLowerCase();
		intervaloWrap.classList.toggle("hidden", !recurrente);
		if (!fechaInput.value || fechaInput.dataset.lastDia !== dia) {
			const lunes = getWeekStart(weekOffset);
			const diaIdx = DIA_IDX[dia];
			const fecha = new Date(lunes);
			fecha.setDate(lunes.getDate() + diaIdx);
			fechaInput.value = isoDate(fecha);
			fechaInput.dataset.lastDia = dia;
		}
		if (fechaInput.value) {
			const fechaLarga = fmtFechaLarga(fechaInput.value);
			if (recurrente) previewText.innerHTML = `<strong>${intervalo === 1 ? `todos los ${dia.toLowerCase()}` : `cada ${intervalo} semanas, los ${dia.toLowerCase()}`}</strong> · primera aparición: ${fechaLarga}`;
			else previewText.innerHTML = `<strong>solo ${fechaLarga}</strong> (visita puntual)`;
		} else previewText.textContent = "-";
	}
	function renderSaltos() {
		const id = document.getElementById("ag-id").value;
		const section = document.getElementById("ag-saltos-section");
		const list = document.getElementById("ag-saltos-list");
		if (!id) {
			section.classList.add("hidden");
			return;
		}
		const a = state.agenda.find((x) => sameId(x.id, id));
		if (!a || a.recurrente === false) {
			section.classList.add("hidden");
			return;
		}
		section.classList.remove("hidden");
		const saltadas = a.semanasSaltadas || [];
		if (saltadas.length === 0) list.innerHTML = "<p class=\"text-[11px] text-amber-700 italic\">Sin semanas saltadas</p>";
		else list.innerHTML = saltadas.map((s) => {
			const semana = typeof s === "string" ? s : s.semana;
			const movidoA = typeof s === "object" ? s.movidoA : null;
			return `<div class="flex items-center justify-between bg-white rounded px-2 py-1 border border-amber-200"><span class="text-xs text-amber-800">${movidoA ? `⏭️ Semana del ${fmtFechaCorta(semana)} · ↪️ movida a ${esc(movidoA.dia)} ${movidoA.hora || ""}` : `⏭️ Semana del ${fmtFechaCorta(semana)}`}</span><button type="button" data-action="remove-salto" data-fecha="${semana}" class="text-amber-600 hover:text-amber-800 text-xs">✕</button></div>`;
		}).join("");
	}
	function openModalAgenda(id = null, prefillDia = null, prefillPacId = null) {
		document.getElementById("form-agenda").reset();
		document.getElementById("ag-id").value = "";
		document.getElementById("btn-delete-agenda").classList.add("hidden");
		document.getElementById("ag-recurrente").checked = false;
		const fechaInput = document.getElementById("ag-fecha");
		fechaInput.value = "";
		fechaInput.dataset.lastDia = "";
		const sel = document.getElementById("ag-paciente");
		sel.innerHTML = state.pacientes.slice().sort((a, b) => {
			const af = a.estado === "Fuera de seguimiento" ? 1 : 0;
			const bf = b.estado === "Fuera de seguimiento" ? 1 : 0;
			if (af !== bf) return af - bf;
			return String(a.nombre || "").localeCompare(String(b.nombre || ""), "es");
		}).map((p) => `<option value="${esc(p.id)}">${esc(p.nombre)}${p.empresa ? " (" + esc(p.empresa) + ")" : ""}${p.estado === "Fuera de seguimiento" ? " · fuera" : ""}${p.usaOpioides === "Sí" ? " 💊" : ""}</option>`).join("");
		if (id) {
			const a = state.agenda.find((x) => sameId(x.id, id));
			if (!a) return;
			document.getElementById("modal-agenda-title").textContent = "Editar Visita";
			document.getElementById("ag-id").value = a.id;
			document.getElementById("ag-paciente").value = a.pacienteId;
			document.getElementById("ag-dia").value = a.diaSemana;
			document.getElementById("ag-hora").value = a.horaInicio || "09:00";
			document.getElementById("ag-recurrente").checked = a.recurrente !== false;
			document.getElementById("ag-intervalo").value = String(a.intervaloSemanas || 1);
			document.getElementById("ag-notas").value = a.notasAgenda || "";
			document.getElementById("btn-delete-agenda").classList.remove("hidden");
			if (a.recurrente === false && a.semanaEspecifica) {
				const lunesActual = getWeekStart(0);
				const lunesEspec = /* @__PURE__ */ new Date(String(a.semanaEspecifica).trim() + "T00:00:00");
				const fecha = getWeekStart(Math.round((lunesEspec - lunesActual) / 6048e5));
				const diaIdx = DIA_IDX[a.diaSemana];
				fecha.setDate(fecha.getDate() + diaIdx);
				fechaInput.value = isoDate(fecha);
			} else if (a.recurrente !== false) {
				const lunes = getWeekStart(weekOffset);
				const diaIdx = DIA_IDX[a.diaSemana];
				const fecha = new Date(lunes);
				fecha.setDate(lunes.getDate() + diaIdx);
				fechaInput.value = isoDate(fecha);
			}
			fechaInput.dataset.lastDia = a.diaSemana;
		} else {
			document.getElementById("modal-agenda-title").textContent = "Nueva visita";
			if (prefillDia) document.getElementById("ag-dia").value = prefillDia;
			if (prefillPacId) document.getElementById("ag-paciente").value = prefillPacId;
			const visitas = getVisitasForWeek(weekOffset).filter((v) => v.diaSemana === (prefillDia || "Lunes"));
			if (visitas.length > 0) {
				const ultima = visitas.sort((a, b) => (b.horaLibre || "").localeCompare(a.horaLibre || ""))[0];
				document.getElementById("ag-hora").value = ultima.horaLibre;
			}
		}
		updateHoraPreview();
		updateFechaPreview();
		renderSaltos();
		document.getElementById("modal-agenda").classList.remove("hidden");
	}
	document.getElementById("ag-hora").addEventListener("change", updateHoraPreview);
	document.getElementById("ag-dia").addEventListener("change", updateFechaPreview);
	document.getElementById("ag-fecha").addEventListener("change", updateFechaPreview);
	document.getElementById("ag-intervalo").addEventListener("change", updateFechaPreview);
	document.getElementById("ag-recurrente").addEventListener("change", () => {
		updateFechaPreview();
		renderSaltos();
	});
	document.getElementById("btn-add-salto").addEventListener("click", () => {
		const fecha = document.getElementById("ag-salto-fecha").value;
		if (!fecha) return;
		const lunesISO = getLunesISOForDate(fecha);
		const id = document.getElementById("ag-id").value;
		const a = state.agenda.find((x) => sameId(x.id, id));
		if (!a) return;
		if (!a.semanasSaltadas) a.semanasSaltadas = [];
		if (!a.semanasSaltadas.some((s) => (typeof s === "string" ? s : s.semana) === lunesISO)) {
			a.semanasSaltadas.push(lunesISO);
			saveLocal();
			pushRow("Agenda", a);
			renderSaltos();
			toast("Semana saltada");
		} else toast("Esa semana ya estaba saltada", "info");
		document.getElementById("ag-salto-fecha").value = "";
	});
	document.getElementById("form-agenda").addEventListener("submit", async (e) => {
		e.preventDefault();
		const id = document.getElementById("ag-id").value;
		const recurrente = document.getElementById("ag-recurrente").checked;
		const fechaStr = document.getElementById("ag-fecha").value;
		let semanaEspecifica = null;
		if (!recurrente && fechaStr) semanaEspecifica = getLunesISOForDate(fechaStr);
		const existingPrev = id ? state.agenda.find((a) => sameId(a.id, id)) : null;
		let intervaloSemanas = 1;
		let fechaInicioRecurrencia = null;
		if (recurrente) {
			intervaloSemanas = parseInt(document.getElementById("ag-intervalo").value, 10) || 1;
			fechaInicioRecurrencia = existingPrev && existingPrev.fechaInicioRecurrencia ? existingPrev.fechaInicioRecurrencia : getLunesISOForDate(fechaStr);
		}
		const data = {
			pacienteId: String(document.getElementById("ag-paciente").value).trim(),
			diaSemana: document.getElementById("ag-dia").value,
			horaInicio: document.getElementById("ag-hora").value,
			recurrente,
			intervaloSemanas,
			fechaInicioRecurrencia,
			semanaEspecifica,
			notasAgenda: document.getElementById("ag-notas").value.trim()
		};
		let row;
		if (id) {
			const idx = state.agenda.findIndex((a) => sameId(a.id, id));
			if (idx >= 0) {
				const existing = state.agenda[idx];
				row = {
					...existing,
					...data,
					semanasSaltadas: recurrente ? existing.semanasSaltadas || [] : []
				};
				state.agenda[idx] = row;
			}
			toast("Visita actualizada");
		} else {
			row = {
				id: uid(),
				...data,
				semanasSaltadas: []
			};
			state.agenda.push(row);
			toast("Visita creada");
		}
		saveLocal();
		pushRow("Agenda", row);
		closeModal("modal-agenda");
		renderAll();
	});
	document.getElementById("btn-delete-agenda").addEventListener("click", async () => {
		const id = document.getElementById("ag-id").value;
		if (!id) return;
		if (!confirm("¿Eliminar esta visita?")) return;
		state.agenda = state.agenda.filter((a) => !sameId(a.id, id));
		saveLocal();
		pushDelete("Agenda", id);
		closeModal("modal-agenda");
		renderAll();
		toast("Visita eliminada", "info");
	});
	function openModalMover(agendaVisitaId) {
		const v = getVisitasForWeek(weekOffset).find((x) => sameId(x.id, agendaVisitaId) && !x.movida);
		if (!v) return;
		const p = pacienteById(v.pacienteId);
		document.getElementById("mover-id").value = v.id;
		document.getElementById("mover-info").textContent = `${p ? p.nombre : "Paciente"} · actualmente ${v.diaSemana} ${v.horaInicio}`;
		document.getElementById("mover-dia").value = v.diaSemana;
		document.getElementById("mover-hora").value = v.horaInicio;
		document.getElementById("modal-mover").classList.remove("hidden");
	}
	document.getElementById("form-mover").addEventListener("submit", async (e) => {
		e.preventDefault();
		const id = document.getElementById("mover-id").value;
		const nuevoDia = document.getElementById("mover-dia").value;
		const nuevaHora = document.getElementById("mover-hora").value;
		const a = state.agenda.find((x) => sameId(x.id, id));
		if (!a) {
			closeModal("modal-mover");
			return;
		}
		const lunes = getWeekStart(weekOffset);
		const lunesISO = isoDate(lunes);
		const diaIdx = DIA_IDX[nuevoDia];
		const fechaNueva = new Date(lunes);
		fechaNueva.setDate(lunes.getDate() + diaIdx);
		const fechaNuevaISO = isoDate(fechaNueva);
		if (a.recurrente === false) {
			a.diaSemana = nuevoDia;
			a.horaInicio = nuevaHora;
			a.semanaEspecifica = lunesISO;
			saveLocal();
			pushRow("Agenda", a);
			closeModal("modal-mover");
			renderAll();
			toast("Visita movida");
			return;
		}
		const nueva = {
			id: uid(),
			pacienteId: a.pacienteId,
			diaSemana: nuevoDia,
			horaInicio: nuevaHora,
			recurrente: false,
			semanaEspecifica: lunesISO,
			semanasSaltadas: [],
			notasAgenda: a.notasAgenda || ""
		};
		state.agenda.push(nueva);
		if (!a.semanasSaltadas) a.semanasSaltadas = [];
		a.semanasSaltadas = a.semanasSaltadas.filter((s) => (typeof s === "string" ? s : s.semana) !== lunesISO);
		a.semanasSaltadas.push({
			semana: lunesISO,
			movidoA: {
				dia: nuevoDia,
				fecha: fechaNuevaISO,
				hora: nuevaHora,
				agendaIdDestino: nueva.id
			}
		});
		saveLocal();
		pushRow("Agenda", a);
		pushRow("Agenda", nueva);
		closeModal("modal-mover");
		renderAll();
		toast("Visita movida a " + nuevoDia);
	});
	function openModalEvolucion(agendaId = null, pacienteId = null, fechaPrefill = null) {
		document.getElementById("form-evolucion").reset();
		document.getElementById("ev-id").value = "";
		document.getElementById("ev-agendaId").value = agendaId || "";
		document.getElementById("ev-pacienteId").value = pacienteId || "";
		let p = null;
		if (agendaId) {
			const a = state.agenda.find((x) => sameId(x.id, agendaId));
			if (a) p = pacienteById(a.pacienteId);
		} else if (pacienteId) p = pacienteById(pacienteId);
		if (!p) {
			toast("Paciente no encontrado", "error");
			return;
		}
		document.getElementById("ev-pacienteId").value = p.id;
		const edad = calcEdad(p.fechaNacimiento);
		document.getElementById("ev-paciente-info").innerHTML = `<div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">${String(p.nombre || "?").charAt(0).toUpperCase()}</div><div class="flex-1"><p class="font-semibold text-brand-900">${esc(p.nombre)}</p><p class="text-xs text-brand-700">${esc(p.dni || "")} ${edad !== null ? "· " + edad + " años" : ""} ${p.usaOpioides === "Sí" ? "· 💊 Opioides" : ""} · 🏥 ${esc(p.obraSocial || "-")}</p></div></div>${p.direccion ? `<p class="text-xs text-brand-700 mt-2">🏠 ${esc(p.direccion)} ${p.piso ? "· " + esc(p.piso) : ""}</p>` : ""}${p.contacto ? `<p class="text-xs text-brand-700">📞 ${esc(p.contacto)}</p>` : ""}`;
		const fecha = fechaPrefill || isoDate(/* @__PURE__ */ new Date());
		document.getElementById("ev-fecha").value = fecha;
		const existente = state.evoluciones.find((x) => sameId(x.pacienteId, p.id) && String(x.fechaVisita || "").trim() === fecha);
		const notasField = document.getElementById("ev-notas");
		const hint = document.getElementById("ev-notas-hint");
		if (existente) {
			document.getElementById("ev-id").value = existente.id;
			notasField.value = existente.notas || "";
			document.getElementById("ev-sistema").checked = !!existente.evolucionoSistema;
			hint.textContent = "Ya había una nota para esta fecha — la estás editando, no duplicando.";
		} else {
			notasField.value = "";
			document.getElementById("ev-sistema").checked = false;
			hint.textContent = "";
		}
		const noFirma = osNoRequiereFirma(p.obraSocial);
		const firmaWrap = document.getElementById("ev-firma-wrap");
		const firmaMsg = document.getElementById("ev-firma-oculto-msg");
		const firmaCheck = document.getElementById("ev-firma");
		if (noFirma) {
			firmaWrap.classList.add("hidden");
			firmaMsg.classList.remove("hidden");
			firmaCheck.checked = false;
		} else {
			firmaWrap.classList.remove("hidden");
			firmaMsg.classList.add("hidden");
			if (existente) firmaCheck.checked = !!existente.firmoPlanillaOS;
		}
		document.getElementById("modal-evolucion").classList.remove("hidden");
		if (existente && notasField.value) setTimeout(() => {
			notasField.focus();
			notasField.setSelectionRange(notasField.value.length, notasField.value.length);
		}, 0);
	}
	document.getElementById("form-evolucion").addEventListener("submit", async (e) => {
		e.preventDefault();
		const existingId = document.getElementById("ev-id").value;
		const pacienteId = document.getElementById("ev-pacienteId").value;
		const noFirma = osNoRequiereFirma(pacienteById(pacienteId)?.obraSocial);
		const data = {
			pacienteId,
			fechaVisita: document.getElementById("ev-fecha").value,
			notas: document.getElementById("ev-notas").value.trim(),
			evolucionoSistema: document.getElementById("ev-sistema").checked,
			firmoPlanillaOS: noFirma ? null : document.getElementById("ev-firma").checked
		};
		let row;
		if (existingId) {
			const idx = state.evoluciones.findIndex((x) => sameId(x.id, existingId));
			if (idx >= 0) {
				row = {
					...state.evoluciones[idx],
					...data
				};
				state.evoluciones[idx] = row;
			} else {
				row = {
					id: uid(),
					...data
				};
				state.evoluciones.push(row);
			}
		} else {
			row = {
				id: uid(),
				...data
			};
			state.evoluciones.push(row);
		}
		saveLocal();
		pushRow("Evoluciones", row);
		toast(existingId ? "Pendiente actualizado" : "Pendiente guardado");
		closeModal("modal-evolucion");
		renderAll();
	});
	function openModalConfig() {
		document.getElementById("cfg-api-url").value = state.config.apiUrl || "";
		document.getElementById("cfg-api-token").value = state.config.apiToken || "";
		fillOrigenInputs();
		document.getElementById("modal-config").classList.remove("hidden");
	}
	document.getElementById("btn-save-config").addEventListener("click", () => {
		state.config.apiUrl = document.getElementById("cfg-api-url").value.trim();
		state.config.apiToken = document.getElementById("cfg-api-token").value.trim();
		const om = document.getElementById("cfg-origen-manana");
		const ot = document.getElementById("cfg-origen-tarde");
		if (om) state.config.origenManana = om.value.trim();
		if (ot) state.config.origenTarde = ot.value.trim();
		saveLocal();
		fillOrigenInputs();
		closeModal("modal-config");
		toast("Configuración guardada");
		if (state.config.apiUrl && state.config.apiToken) syncWithSheets();
	});
	function detectSeparator(text) {
		const firstLine = text.split(/\r?\n/)[0] || "";
		const commas = (firstLine.match(/,/g) || []).length;
		const semis = (firstLine.match(/;/g) || []).length;
		const tabs = (firstLine.match(/\t/g) || []).length;
		if (tabs > commas && tabs > semis) return "	";
		return semis > commas ? ";" : ",";
	}
	function parseCSV(text, sep) {
		if (text.charCodeAt(0) === 65279) text = text.slice(1);
		const rows = [];
		let row = [], field = "", inQuotes = false;
		for (let i = 0; i < text.length; i++) {
			const c = text[i];
			if (inQuotes) {
				if (c === "\"") {
					if (text[i + 1] === "\"") {
						field += "\"";
						i++;
					} else inQuotes = false;
				} else field += c;
			} else if (c === "\"") inQuotes = true;
			else if (c === sep) {
				row.push(field);
				field = "";
			} else if (c === "\n") {
				row.push(field);
				rows.push(row);
				row = [];
				field = "";
			} else if (c === "\r") {} else field += c;
		}
		if (field.length > 0 || row.length > 0) {
			row.push(field);
			rows.push(row);
		}
		return rows.filter((r) => r.length > 1 || r.length === 1 && r[0].trim() !== "");
	}
	function parseFechaFlexible(s) {
		if (!s) return "";
		s = String(s).trim();
		let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
		if (m) return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
		m = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
		if (m) {
			let y = m[3];
			if (y.length === 2) y = (parseInt(y, 10) <= 29 ? "20" : "19") + y;
			return `${y}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
		}
		return "";
	}
	const FIELD_MAP = [
		{
			key: "nombre",
			label: "Nombre",
			required: true,
			aliases: [
				"nombre",
				"nya",
				"paciente",
				"nombre pac",
				"pac",
				"nombre completo"
			]
		},
		{
			key: "dni",
			label: "DNI",
			required: false,
			aliases: [
				"dni",
				"documento",
				"doc",
				"num documento"
			]
		},
		{
			key: "direccion",
			label: "Dirección",
			required: false,
			aliases: [
				"direccion",
				"dirección",
				"domicilio",
				"calle",
				"dir"
			]
		},
		{
			key: "piso",
			label: "Piso",
			required: false,
			aliases: [
				"piso",
				"depto",
				"departamento",
				"dpto"
			]
		},
		{
			key: "empresa",
			label: "Empresa",
			required: false,
			aliases: [
				"empresa",
				"prepaga",
				"familia",
				"responsable"
			]
		},
		{
			key: "obraSocial",
			label: "Obra Social",
			required: false,
			aliases: [
				"obra social",
				"os",
				"cobertura"
			]
		},
		{
			key: "numeroAfiliado",
			label: "Nº Afiliado",
			required: false,
			aliases: [
				"numero afiliado",
				"nro afiliado",
				"afiliado"
			]
		},
		{
			key: "contacto",
			label: "Contacto",
			required: false,
			aliases: [
				"contacto",
				"telefono",
				"tel",
				"teléfono",
				"celular",
				"familiar"
			]
		},
		{
			key: "fechaNacimiento",
			label: "Fecha nacim.",
			required: false,
			aliases: [
				"fecha nacimiento",
				"nacimiento",
				"fnac",
				"fecha nac"
			]
		},
		{
			key: "usaOpioides",
			label: "Opioides",
			required: false,
			aliases: [
				"opioides",
				"usa opioides",
				"opioide"
			]
		},
		{
			key: "estado",
			label: "Estado",
			required: false,
			aliases: [
				"estado",
				"situacion",
				"situación"
			]
		}
	];
	function autoMapColumns(headers) {
		const mapping = {};
		headers.forEach((h, idx) => {
			const nh = normalize(h);
			if (!nh) return;
			for (const f of FIELD_MAP) {
				if (mapping[f.key] !== void 0) continue;
				if (f.aliases.some((a) => nh === normalize(a) || nh.includes(normalize(a)))) {
					mapping[f.key] = idx;
					break;
				}
			}
		});
		return mapping;
	}
	function rowToPaciente(row, mapping) {
		const get = (key) => mapping[key] !== void 0 ? (row[mapping[key]] || "").trim() : "";
		const nombre = get("nombre");
		if (!nombre) return null;
		let fechaNac = parseFechaFlexible(get("fechaNacimiento"));
		let opioides = get("usaOpioides");
		if (opioides) {
			const n = normalize(opioides);
			opioides = n === "si" || n === "s" || n === "yes" || n === "1" ? "Sí" : "No";
		} else opioides = "No";
		let estado = get("estado");
		if (!estado) estado = "Activo";
		else {
			const n = normalize(estado);
			if (n.includes("fuera")) estado = "Fuera de seguimiento";
			else if (n.includes("inter")) estado = "Intermitente";
			else estado = "Activo";
		}
		return {
			id: uid(),
			nombre,
			dni: get("dni"),
			direccion: get("direccion"),
			piso: get("piso"),
			empresa: get("empresa"),
			obraSocial: get("obraSocial"),
			numeroAfiliado: get("numeroAfiliado"),
			contacto: get("contacto"),
			fechaNacimiento: fechaNac,
			usaOpioides: opioides,
			estado
		};
	}
	let csvState = {
		headers: [],
		rows: [],
		mapping: {}
	};
	function openModalCSV() {
		document.getElementById("csv-step1").classList.remove("hidden");
		document.getElementById("csv-step2").classList.add("hidden");
		document.getElementById("csv-file").value = "";
		document.getElementById("csv-paste").value = "";
		document.getElementById("modal-csv").classList.remove("hidden");
	}
	function processCSVInput(text) {
		if (!text || !text.trim()) {
			toast("Contenido vacío", "error");
			return;
		}
		const sepRadio = document.querySelector("input[name=\"csv-sep\"]:checked").value;
		const sep = sepRadio === "auto" ? detectSeparator(text) : sepRadio;
		const hasHeader = document.getElementById("csv-has-header").checked;
		const allRows = parseCSV(text, sep);
		if (allRows.length === 0) {
			toast("No se encontraron filas", "error");
			return;
		}
		if (hasHeader) {
			csvState.headers = allRows[0];
			csvState.rows = allRows.slice(1);
		} else {
			csvState.headers = allRows[0].map((_, i) => "Columna " + (i + 1));
			csvState.rows = allRows;
		}
		csvState.mapping = autoMapColumns(csvState.headers);
		showCSVStep2();
	}
	function showCSVStep2() {
		document.getElementById("csv-step1").classList.add("hidden");
		document.getElementById("csv-step2").classList.remove("hidden");
		const mapDiv = document.getElementById("csv-mapping");
		mapDiv.innerHTML = FIELD_MAP.map((f) => {
			const opts = ["<option value=\"\">— sin asignar —</option>"].concat(csvState.headers.map((h, i) => `<option value="${i}" ${csvState.mapping[f.key] === i ? "selected" : ""}>${esc(h)}</option>`)).join("");
			return `<div class="flex items-center gap-2 p-2 rounded-lg border border-slate-200"><label class="text-xs font-medium text-slate-700 w-32 flex-shrink-0">${f.label}${f.required ? " <span class=\"text-rose-500\">*</span>" : ""}</label><select data-field="${f.key}" class="csv-map-select flex-1 px-2 py-1.5 rounded border border-slate-200 text-xs">${opts}</select></div>`;
		}).join("");
		mapDiv.querySelectorAll(".csv-map-select").forEach((sel) => {
			sel.addEventListener("change", () => {
				const key = sel.dataset.field;
				const val = sel.value === "" ? void 0 : parseInt(sel.value);
				if (val === void 0) delete csvState.mapping[key];
				else csvState.mapping[key] = val;
				renderCSVPreview();
			});
		});
		renderCSVPreview();
	}
	function renderCSVPreview() {
		const table = document.getElementById("csv-preview-table");
		const previewRows = csvState.rows.slice(0, 10);
		const mappedKeys = Object.keys(csvState.mapping);
		table.innerHTML = `<thead><tr>${mappedKeys.map((k) => {
			return `<th class="text-left text-[10px] font-semibold text-slate-600">${FIELD_MAP.find((x) => x.key === k).label}</th>`;
		}).join("")}</tr></thead><tbody>${previewRows.map((r) => {
			return `<tr>${mappedKeys.map((k) => {
				const idx = csvState.mapping[k];
				return `<td>${esc(r[idx] || "")}</td>`;
			}).join("")}</tr>`;
		}).join("")}</tbody>`;
		const pacientes = csvState.rows.map((r) => rowToPaciente(r, csvState.mapping)).filter(Boolean);
		const nuevos = pacientes.filter((p) => !state.pacientes.some((x) => x.dni && p.dni && x.dni === p.dni)).length;
		document.getElementById("csv-stats").textContent = `${pacientes.length} pacientes · ${nuevos} nuevos · ${pacientes.length - nuevos} a actualizar`;
	}
	async function doCSVImport() {
		const pacientes = csvState.rows.map((r) => rowToPaciente(r, csvState.mapping)).filter(Boolean);
		if (pacientes.length === 0) {
			toast("Ningún paciente válido", "error");
			return;
		}
		let nuevos = 0, actualizados = 0;
		const rowsToSync = [];
		pacientes.forEach((p) => {
			if (p.dni) {
				const existing = state.pacientes.find((x) => x.dni === p.dni);
				if (existing) {
					Object.assign(existing, {
						nombre: p.nombre,
						direccion: p.direccion,
						piso: p.piso,
						empresa: p.empresa,
						obraSocial: p.obraSocial,
						numeroAfiliado: p.numeroAfiliado,
						contacto: p.contacto,
						fechaNacimiento: p.fechaNacimiento,
						usaOpioides: p.usaOpioides,
						estado: p.estado
					});
					rowsToSync.push(existing);
					actualizados++;
					return;
				}
			}
			state.pacientes.push(p);
			rowsToSync.push(p);
			nuevos++;
		});
		saveLocal();
		for (const row of rowsToSync) try {
			await pushRow("Pacientes", row);
		} catch (e) {
			console.error(e);
		}
		closeModal("modal-csv");
		renderAll();
		toast(`Importados: ${nuevos} nuevos, ${actualizados} actualizados`);
	}
	document.getElementById("csv-dropzone").addEventListener("click", () => document.getElementById("csv-file").click());
	document.getElementById("csv-file").addEventListener("change", (e) => {
		const f = e.target.files[0];
		if (!f) return;
		const reader = new FileReader();
		reader.onload = (ev) => {
			document.getElementById("csv-paste").value = ev.target.result;
			processCSVInput(ev.target.result);
		};
		reader.readAsText(f, "UTF-8");
	});
	document.getElementById("csv-preview-btn").addEventListener("click", () => processCSVInput(document.getElementById("csv-paste").value));
	document.getElementById("csv-back-btn").addEventListener("click", () => {
		document.getElementById("csv-step1").classList.remove("hidden");
		document.getElementById("csv-step2").classList.add("hidden");
	});
	document.getElementById("csv-import-btn").addEventListener("click", doCSVImport);
	function closeModal(id) {
		document.getElementById(id).classList.add("hidden");
	}
	document.querySelectorAll(".modal-close").forEach((b) => b.addEventListener("click", (e) => {
		const m = e.target.closest("[id^=\"modal-\"]");
		if (m) m.classList.add("hidden");
	}));
	document.querySelectorAll("[id^=\"modal-\"]").forEach((m) => m.addEventListener("click", (e) => {
		if (e.target === m) m.classList.add("hidden");
	}));
	if (!window.__palKeydown) {
		window.__palKeydown = true;
		document.addEventListener("keydown", (e) => {
			if (e.key !== "Escape") return;
			const root = document.getElementById("paliativos-host") || document.body;
			const abiertos = Array.from(root.querySelectorAll("[id^=\"modal-\"]:not(.hidden)"));
			if (abiertos.length === 0) return;
			abiertos[abiertos.length - 1].classList.add("hidden");
		});
	}
	document.addEventListener("click", (e) => {
		const btn = e.target.closest("[data-action]");
		if (!btn) return;
		switch (btn.dataset.action) {
			case "ver-agenda":
				openModalAgenda(btn.dataset.id);
				break;
			case "edit-agenda":
				e.stopPropagation();
				openModalAgenda(btn.dataset.id);
				break;
			case "abrir-mover":
				e.stopPropagation();
				openModalMover(btn.dataset.id);
				break;
			case "toggle-card-expandida": {
				const id = btn.dataset.id;
				if (cardsToggleadas.has(id)) cardsToggleadas.delete(id);
				else cardsToggleadas.add(id);
				renderAgendaDesktop();
				break;
			}
			case "marcar-hecha": {
				e.stopPropagation();
				const a = state.agenda.find((x) => sameId(x.id, btn.dataset.id));
				if (a) {
					if (!a.fechasHechas) a.fechasHechas = [];
					if (!a.fechasHechas.includes(btn.dataset.fecha)) a.fechasHechas.push(btn.dataset.fecha);
					saveLocal();
					pushRow("Agenda", a);
					renderAll();
					toast("Marcada como hecha");
				}
				break;
			}
			case "desmarcar-hecha": {
				e.stopPropagation();
				const a = state.agenda.find((x) => sameId(x.id, btn.dataset.id));
				if (a && a.fechasHechas) {
					a.fechasHechas = a.fechasHechas.filter((f) => f !== btn.dataset.fecha);
					saveLocal();
					pushRow("Agenda", a);
					renderAll();
					toast("Marca quitada", "info");
				}
				break;
			}
			case "deshacer-movida": {
				const aid = btn.dataset.id;
				const semana = btn.dataset.semana;
				const a = state.agenda.find((x) => sameId(x.id, aid));
				if (a && a.semanasSaltadas) {
					const entry = a.semanasSaltadas.find((s) => typeof s === "object" && s.semana === semana);
					if (entry && entry.movidoA && entry.movidoA.agendaIdDestino) {
						state.agenda = state.agenda.filter((x) => !sameId(x.id, entry.movidoA.agendaIdDestino));
						pushDelete("Agenda", entry.movidoA.agendaIdDestino);
					}
					a.semanasSaltadas = a.semanasSaltadas.filter((s) => (typeof s === "string" ? s : s.semana) !== semana);
					saveLocal();
					pushRow("Agenda", a);
					renderAll();
					toast("Movimiento deshecho", "info");
				}
				break;
			}
			case "evolucionar":
				e.stopPropagation();
				openModalEvolucion(btn.dataset.agenda, null, btn.dataset.fecha);
				break;
			case "add-agenda":
				openModalAgenda(null, btn.dataset.dia);
				break;
			case "ruta-turno": {
				e.preventDefault();
				e.stopPropagation();
				const dia = btn.dataset.dia;
				const turno = btn.dataset.turno;
				const url = mapsLinkRuta(getVisitasForWeek(weekOffset).filter((v) => !v.movida && v.diaSemana === dia && v.turno === turno).sort((a, b) => String(a.horaInicio || "").localeCompare(String(b.horaInicio || ""))).map((v) => direccionCompleta(pacienteById(v.pacienteId))), origenDeTurno(turno));
				if (!url) {
					toast("No hay direcciones para armar la ruta", "info");
					break;
				}
				window.open(url, "_blank", "noopener");
				break;
			}
			case "add-agenda-paciente":
				closeModal("modal-detalle");
				openModalAgenda(null, null, btn.dataset.id);
				break;
			case "add-agenda-paciente-pending":
				openModalAgenda(null, null, btn.dataset.id);
				break;
			case "select-day-mobile":
				selectedDayMobile = parseInt(btn.dataset.day);
				selectedDayByWeek[weekOffset] = selectedDayMobile;
				renderAgendaMobile();
				break;
			case "ver-paciente":
				openModalDetalle(btn.dataset.id);
				break;
			case "edit-paciente":
				closeModal("modal-detalle");
				openModalPaciente(btn.dataset.id);
				break;
			case "delete-paciente": {
				if (!confirm("¿Eliminar este paciente y todas sus visitas y evoluciones?")) return;
				const pid = btn.dataset.id;
				const ags = state.agenda.filter((a) => sameId(a.pacienteId, pid));
				const evs = state.evoluciones.filter((e) => sameId(e.pacienteId, pid));
				state.pacientes = state.pacientes.filter((p) => !sameId(p.id, pid));
				state.agenda = state.agenda.filter((a) => !sameId(a.pacienteId, pid));
				state.evoluciones = state.evoluciones.filter((e) => !sameId(e.pacienteId, pid));
				saveLocal();
				pushDelete("Pacientes", pid);
				ags.forEach((a) => pushDelete("Agenda", a.id));
				evs.forEach((e) => pushDelete("Evoluciones", e.id));
				closeModal("modal-detalle");
				renderAll();
				toast("Paciente eliminado", "info");
				break;
			}
			case "new-evolucion-paciente":
				closeModal("modal-detalle");
				openModalEvolucion(null, btn.dataset.id);
				break;
			case "delete-evolucion":
				if (!confirm("¿Eliminar este pendiente?")) return;
				state.evoluciones = state.evoluciones.filter((e) => !sameId(e.id, btn.dataset.id));
				saveLocal();
				pushDelete("Evoluciones", btn.dataset.id);
				renderAll();
				toast("Pendiente eliminado", "info");
				break;
			case "toggle-sistema": {
				const ev = state.evoluciones.find((x) => sameId(x.id, btn.dataset.id));
				if (ev) {
					ev.evolucionoSistema = !ev.evolucionoSistema;
					saveLocal();
					pushRow("Evoluciones", ev);
					renderAll();
					toast(ev.evolucionoSistema ? "Marcado: cargado en sistema" : "Desmarcado", ev.evolucionoSistema ? "success" : "info");
				}
				break;
			}
			case "toggle-firma": {
				const ev = state.evoluciones.find((x) => sameId(x.id, btn.dataset.id));
				if (ev) {
					ev.firmoPlanillaOS = !ev.firmoPlanillaOS;
					saveLocal();
					pushRow("Evoluciones", ev);
					renderAll();
					toast(ev.firmoPlanillaOS ? "Marcado: firmó planilla" : "Desmarcado", ev.firmoPlanillaOS ? "success" : "info");
				}
				break;
			}
			case "delete-agenda": {
				if (!confirm("¿Eliminar esta visita?")) return;
				const aid = btn.dataset.id;
				state.agenda = state.agenda.filter((a) => !sameId(a.id, aid));
				saveLocal();
				pushDelete("Agenda", aid);
				renderAll();
				toast("Visita eliminada", "info");
				break;
			}
			case "remove-salto": {
				const fecha = btn.dataset.fecha;
				const id = document.getElementById("ag-id").value;
				const a = state.agenda.find((x) => sameId(x.id, id));
				if (a && a.semanasSaltadas) {
					const entry = a.semanasSaltadas.find((s) => (typeof s === "string" ? s : s.semana) === fecha);
					if (entry && typeof entry === "object" && entry.movidoA && entry.movidoA.agendaIdDestino) {
						state.agenda = state.agenda.filter((x) => !sameId(x.id, entry.movidoA.agendaIdDestino));
						pushDelete("Agenda", entry.movidoA.agendaIdDestino);
					}
					a.semanasSaltadas = a.semanasSaltadas.filter((s) => (typeof s === "string" ? s : s.semana) !== fecha);
					saveLocal();
					pushRow("Agenda", a);
					renderSaltos();
					renderAgenda();
					toast("Semana restaurada");
				}
				break;
			}
		}
	});
	document.querySelectorAll(".nav-btn").forEach((b) => b.addEventListener("click", () => switchView(b.dataset.view)));
	function switchView(view) {
		document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
		document.getElementById("view-" + view).classList.add("active");
		document.querySelectorAll(".nav-btn").forEach((b) => {
			b.classList.toggle("active", b.dataset.view === view);
			if (b.dataset.view !== view) b.classList.add("text-slate-600");
			else b.classList.remove("text-slate-600");
		});
		if (view === "agenda") renderAgenda();
		if (view === "pacientes") renderPacientes();
		if (view === "visitas") renderVisitas();
		if (view === "planilla") renderPlanilla();
	}
	document.getElementById("btn-add-patient").addEventListener("click", () => openModalPaciente());
	document.getElementById("btn-add-visit").addEventListener("click", () => openModalAgenda());
	document.getElementById("btn-toggle-vista").addEventListener("click", () => {
		vistaGlobalOverride = vistaGlobalOverride === "comprimida" ? "completa" : "comprimida";
		cardsToggleadas.clear();
		renderAgendaDesktop();
	});
	document.getElementById("search-pacientes").addEventListener("input", renderPacientes);
	document.getElementById("filter-estado").addEventListener("change", renderPacientes);
	document.getElementById("filter-empresa").addEventListener("change", renderPacientes);
	document.getElementById("filter-os").addEventListener("change", renderPacientes);
	document.getElementById("search-visitas").addEventListener("input", renderVisitas);
	document.getElementById("btn-prev-week").addEventListener("click", () => {
		weekOffset--;
		renderAgenda();
	});
	document.getElementById("btn-next-week").addEventListener("click", () => {
		weekOffset++;
		renderAgenda();
	});
	document.getElementById("btn-today").addEventListener("click", () => {
		weekOffset = 0;
		selectedDayMobile = getTodayDayIdx();
		selectedDayByWeek[0] = selectedDayMobile;
		renderAgenda();
	});
	document.getElementById("btn-config").addEventListener("click", openModalConfig);
	document.getElementById("btn-config-mobile").addEventListener("click", openModalConfig);
	document.getElementById("btn-sync-now").addEventListener("click", syncWithSheets);
	document.getElementById("btn-sync-now-mobile").addEventListener("click", syncWithSheets);
	document.getElementById("btn-import-csv").addEventListener("click", openModalCSV);
	document.getElementById("btn-import-csv-mobile").addEventListener("click", openModalCSV);
	document.getElementById("btn-prev-month").addEventListener("click", () => {
		monthOffset--;
		renderPlanilla();
	});
	document.getElementById("btn-next-month").addEventListener("click", () => {
		monthOffset++;
		renderPlanilla();
	});
	document.getElementById("planilla-filter-empresa").addEventListener("change", renderPlanilla);
	document.getElementById("planilla-solo-pendientes").addEventListener("change", renderPlanilla);
	document.getElementById("btn-export").addEventListener("click", () => {
		const data = {
			version: 8,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			pacientes: state.pacientes,
			agenda: state.agenda,
			evoluciones: state.evoluciones,
			tarifas: state.tarifas,
			config: state.config
		};
		const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `paliativos-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
		toast("Backup exportado");
	});
	document.getElementById("btn-import").addEventListener("click", () => {
		document.getElementById("import-file").value = "";
		document.getElementById("modal-import").classList.remove("hidden");
	});
	document.getElementById("btn-do-import").addEventListener("click", () => {
		const f = document.getElementById("import-file").files[0];
		if (!f) {
			toast("Seleccioná un archivo", "error");
			return;
		}
		const r = new FileReader();
		r.onload = async (ev) => {
			try {
				const d = JSON.parse(ev.target.result);
				if (!d.pacientes) throw new Error("Formato inválido");
				if (!confirm("¿Reemplazar todos los datos actuales?")) return;
				state.pacientes = d.pacientes || [];
				state.agenda = d.agenda || [];
				state.evoluciones = d.evoluciones || [];
				state.tarifas = d.tarifas || [];
				if (d.config) state.config = {
					...state.config,
					...d.config
				};
				saveLocal();
				if (state.config.apiUrl && state.config.apiToken) try {
					await apiCall("POST", {
						action: "sync",
						data: {
							pacientes: state.pacientes,
							agenda: state.agenda,
							evoluciones: state.evoluciones,
							tarifas: state.tarifas
						},
						token: state.config.apiToken
					});
					state.lastSync = (/* @__PURE__ */ new Date()).toISOString();
					saveLocal();
				} catch (err) {
					console.error(err);
				}
				closeModal("modal-import");
				renderAll();
				toast("Datos importados");
			} catch (err) {
				toast("Error: " + err.message, "error");
			}
		};
		r.readAsText(f);
	});
	document.getElementById("btn-reset").addEventListener("click", () => {
		if (!confirm("¿Reiniciar con datos demo? Se perderán los datos actuales.")) return;
		state.pacientes = [];
		state.agenda = [];
		state.evoluciones = [];
		seedData();
		renderAll();
		toast("Datos demo cargados", "info");
	});
	function refreshOrigenStatus() {
		const el = document.getElementById("origen-status");
		if (!el) return;
		const m = String(state.config.origenManana || "").trim();
		const t = String(state.config.origenTarde || "").trim();
		el.textContent = (m ? "Mañana: desde " + m : "Mañana: empieza en el primer paciente") + " · " + (t ? "Tarde: desde " + t : "Tarde: empieza en el primer paciente");
		document.querySelectorAll("[data-action=\"ruta-turno\"]").forEach((btn) => {
			btn.title = tituloRuta(btn.getAttribute("data-turno"));
		});
	}
	function fillOrigenInputs() {
		[
			["origen-manana", "origenManana"],
			["origen-tarde", "origenTarde"],
			["cfg-origen-manana", "origenManana"],
			["cfg-origen-tarde", "origenTarde"]
		].forEach(([id, key]) => {
			const el = document.getElementById(id);
			if (!el || el === document.activeElement) return;
			el.value = state.config[key] || "";
		});
		refreshOrigenStatus();
	}
	function bindOrigenInputs() {
		[[
			"origen-manana",
			"cfg-origen-manana",
			"origenManana"
		], [
			"origen-tarde",
			"cfg-origen-tarde",
			"origenTarde"
		]].forEach(([a, b, key]) => {
			[a, b].forEach((id) => {
				const el = document.getElementById(id);
				if (!el || el.dataset.boundOrigen) return;
				el.dataset.boundOrigen = "1";
				el.addEventListener("input", () => {
					state.config[key] = el.value;
					const otherId = id === a ? b : a;
					const other = document.getElementById(otherId);
					if (other && other !== document.activeElement) other.value = el.value;
					saveLocal();
					refreshOrigenStatus();
				});
				el.addEventListener("blur", () => {
					state.config[key] = el.value.trim();
					saveLocal();
					fillOrigenInputs();
				});
			});
		});
	}
	bindOrigenInputs();
	loadLocal();
	if (state.pacientes.length === 0 && state.agenda.length === 0 && state.evoluciones.length === 0) seedData();
	updateViewToggleUI();
	renderAll();
	fillOrigenInputs();
	if (state.lastSync) updateSyncUI("ok");
	if (state.config.apiUrl && state.config.apiToken) setTimeout(syncWithSheets, 500);
}
function AgendaPage() {
	const slotRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const slot = slotRef.current;
		if (!slot) return;
		let host = document.getElementById("paliativos-host");
		const created = !host;
		if (!host) {
			host = document.createElement("div");
			host.id = "paliativos-host";
		}
		host.className = "min-h-screen bg-slate-50 text-slate-800";
		host.hidden = false;
		slot.replaceChildren(host);
		if (created) mountPaliativos(host);
		return () => {
			host.hidden = true;
			document.body.appendChild(host);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: slotRef,
		className: "min-h-screen bg-slate-50 text-slate-800"
	});
}
//#endregion
export { AgendaPage as component };

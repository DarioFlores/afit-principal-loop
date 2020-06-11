
'use strict';
var server = require('../../server/server');

module.exports = function(MTXCAServiceMTXCAServiceSoap11Binding) {

  var soapDataSource = server.datasources.afipSoapDS;
  var _soapModel;

  soapDataSource.once('connected', function () {
    // Create the model
    _soapModel = soapDataSource.createModel('MTXCAServiceMTXCAServiceSoap11Binding', {});
  });


  /**
   * dummy
   * @param {dummyRequest} dummyRequest dummyRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.dummy = function(dummyRequest, callback) {
      _soapModel.dummy(dummyRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * autorizarComprobante
   * @param {autorizarComprobanteRequest} autorizarComprobanteRequest autorizarComprobanteRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.autorizarComprobante = function(autorizarComprobanteRequest, callback) {
      _soapModel.autorizarComprobante(autorizarComprobanteRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * solicitarCAEA
   * @param {solicitarCAEARequest} solicitarCAEARequest solicitarCAEARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.solicitarCAEA = function(solicitarCAEARequest, callback) {
      _soapModel.solicitarCAEA(solicitarCAEARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * informarComprobanteCAEA
   * @param {informarComprobanteCAEARequest} informarComprobanteCAEARequest informarComprobanteCAEARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.informarComprobanteCAEA = function(informarComprobanteCAEARequest, callback) {
      _soapModel.informarComprobanteCAEA(informarComprobanteCAEARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarUltimoComprobanteAutorizado
   * @param {consultarUltimoComprobanteAutorizadoRequest} consultarUltimoComprobanteAutorizadoRequest consultarUltimoComprobanteAutorizadoRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarUltimoComprobanteAutorizado = function(consultarUltimoComprobanteAutorizadoRequest, callback) {
      _soapModel.consultarUltimoComprobanteAutorizado(consultarUltimoComprobanteAutorizadoRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarComprobante
   * @param {consultarComprobanteRequest} consultarComprobanteRequest consultarComprobanteRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarComprobante = function(consultarComprobanteRequest, callback) {
      _soapModel.consultarComprobante(consultarComprobanteRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarTiposComprobante
   * @param {consultarTiposComprobanteRequest} consultarTiposComprobanteRequest consultarTiposComprobanteRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarTiposComprobante = function(consultarTiposComprobanteRequest, callback) {
      _soapModel.consultarTiposComprobante(consultarTiposComprobanteRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarTiposDocumento
   * @param {consultarTiposDocumentoRequest} consultarTiposDocumentoRequest consultarTiposDocumentoRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarTiposDocumento = function(consultarTiposDocumentoRequest, callback) {
      _soapModel.consultarTiposDocumento(consultarTiposDocumentoRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarAlicuotasIVA
   * @param {consultarAlicuotasIVARequest} consultarAlicuotasIVARequest consultarAlicuotasIVARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarAlicuotasIVA = function(consultarAlicuotasIVARequest, callback) {
      _soapModel.consultarAlicuotasIVA(consultarAlicuotasIVARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarCondicionesIVA
   * @param {consultarCondicionesIVARequest} consultarCondicionesIVARequest consultarCondicionesIVARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarCondicionesIVA = function(consultarCondicionesIVARequest, callback) {
      _soapModel.consultarCondicionesIVA(consultarCondicionesIVARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarMonedas
   * @param {consultarMonedasRequest} consultarMonedasRequest consultarMonedasRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarMonedas = function(consultarMonedasRequest, callback) {
      _soapModel.consultarMonedas(consultarMonedasRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarCotizacionMoneda
   * @param {consultarCotizacionMonedaRequest} consultarCotizacionMonedaRequest consultarCotizacionMonedaRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarCotizacionMoneda = function(consultarCotizacionMonedaRequest, callback) {
      _soapModel.consultarCotizacionMoneda(consultarCotizacionMonedaRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarUnidadesMedida
   * @param {consultarUnidadesMedidaRequest} consultarUnidadesMedidaRequest consultarUnidadesMedidaRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarUnidadesMedida = function(consultarUnidadesMedidaRequest, callback) {
      _soapModel.consultarUnidadesMedida(consultarUnidadesMedidaRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarPuntosVenta
   * @param {consultarPuntosVentaRequest} consultarPuntosVentaRequest consultarPuntosVentaRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarPuntosVenta = function(consultarPuntosVentaRequest, callback) {
      _soapModel.consultarPuntosVenta(consultarPuntosVentaRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarPuntosVentaCAE
   * @param {consultarPuntosVentaCAERequest} consultarPuntosVentaCAERequest consultarPuntosVentaCAERequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarPuntosVentaCAE = function(consultarPuntosVentaCAERequest, callback) {
      _soapModel.consultarPuntosVentaCAE(consultarPuntosVentaCAERequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarPuntosVentaCAEA
   * @param {consultarPuntosVentaCAEARequest} consultarPuntosVentaCAEARequest consultarPuntosVentaCAEARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarPuntosVentaCAEA = function(consultarPuntosVentaCAEARequest, callback) {
      _soapModel.consultarPuntosVentaCAEA(consultarPuntosVentaCAEARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * informarCAEANoUtilizado
   * @param {informarCAEANoUtilizadoRequest} informarCAEANoUtilizadoRequest informarCAEANoUtilizadoRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.informarCAEANoUtilizado = function(informarCAEANoUtilizadoRequest, callback) {
      _soapModel.informarCAEANoUtilizado(informarCAEANoUtilizadoRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarTiposTributo
   * @param {consultarTiposTributoRequest} consultarTiposTributoRequest consultarTiposTributoRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarTiposTributo = function(consultarTiposTributoRequest, callback) {
      _soapModel.consultarTiposTributo(consultarTiposTributoRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * informarCAEANoUtilizadoPtoVta
   * @param {informarCAEANoUtilizadoPtoVtaRequest} informarCAEANoUtilizadoPtoVtaRequest informarCAEANoUtilizadoPtoVtaRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.informarCAEANoUtilizadoPtoVta = function(informarCAEANoUtilizadoPtoVtaRequest, callback) {
      _soapModel.informarCAEANoUtilizadoPtoVta(informarCAEANoUtilizadoPtoVtaRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarCAEA
   * @param {consultarCAEARequest} consultarCAEARequest consultarCAEARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarCAEA = function(consultarCAEARequest, callback) {
      _soapModel.consultarCAEA(consultarCAEARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarPtosVtaCAEANoInformados
   * @param {consultarPtosVtaCAEANoInformadosRequest} consultarPtosVtaCAEANoInformadosRequest consultarPtosVtaCAEANoInformadosRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarPtosVtaCAEANoInformados = function(consultarPtosVtaCAEANoInformadosRequest, callback) {
      _soapModel.consultarPtosVtaCAEANoInformados(consultarPtosVtaCAEANoInformadosRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarCAEAEntreFechas
   * @param {consultarCAEAEntreFechasRequest} consultarCAEAEntreFechasRequest consultarCAEAEntreFechasRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarCAEAEntreFechas = function(consultarCAEAEntreFechasRequest, callback) {
      _soapModel.consultarCAEAEntreFechas(consultarCAEAEntreFechasRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * autorizarAjusteIVA
   * @param {autorizarAjusteIVARequest} autorizarAjusteIVARequest autorizarAjusteIVARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.autorizarAjusteIVA = function(autorizarAjusteIVARequest, callback) {
      _soapModel.autorizarAjusteIVA(autorizarAjusteIVARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * informarAjusteIVACAEA
   * @param {informarAjusteIVACAEARequest} informarAjusteIVACAEARequest informarAjusteIVACAEARequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.informarAjusteIVACAEA = function(informarAjusteIVACAEARequest, callback) {
      _soapModel.informarAjusteIVACAEA(informarAjusteIVACAEARequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * consultarTiposDatosAdicionales
   * @param {consultarTiposDatosAdicionalesRequest} consultarTiposDatosAdicionalesRequest consultarTiposDatosAdicionalesRequest
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  MTXCAServiceMTXCAServiceSoap11Binding.consultarTiposDatosAdicionales = function(consultarTiposDatosAdicionalesRequest, callback) {
      _soapModel.consultarTiposDatosAdicionales(consultarTiposDatosAdicionalesRequest, function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('dummy',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'dummyRequest',
      type: 'dummyRequest',
      description: 'dummyRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'dummyResponse',
      description: 'dummyResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/dummy' },
  description: 'dummy'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('autorizarComprobante',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'autorizarComprobanteRequest',
      type: 'autorizarComprobanteRequest',
      description: 'autorizarComprobanteRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'autorizarComprobanteResponse',
      description: 'autorizarComprobanteResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/autorizarComprobante' },
  description: 'autorizarComprobante'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('solicitarCAEA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'solicitarCAEARequest',
      type: 'solicitarCAEARequest',
      description: 'solicitarCAEARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'solicitarCAEAResponse',
      description: 'solicitarCAEAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/solicitarCAEA' },
  description: 'solicitarCAEA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('informarComprobanteCAEA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'informarComprobanteCAEARequest',
      type: 'informarComprobanteCAEARequest',
      description: 'informarComprobanteCAEARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'informarComprobanteCAEAResponse',
      description: 'informarComprobanteCAEAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/informarComprobanteCAEA' },
  description: 'informarComprobanteCAEA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarUltimoComprobanteAutorizado',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarUltimoComprobanteAutorizadoRequest',
      type: 'consultarUltimoComprobanteAutorizadoRequest',
      description: 'consultarUltimoComprobanteAutorizadoRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarUltimoComprobanteAutorizadoResponse',
      description: 'consultarUltimoComprobanteAutorizadoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarUltimoComprobanteAutorizado' },
  description: 'consultarUltimoComprobanteAutorizado'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarComprobante',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarComprobanteRequest',
      type: 'consultarComprobanteRequest',
      description: 'consultarComprobanteRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarComprobanteResponse',
      description: 'consultarComprobanteResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarComprobante' },
  description: 'consultarComprobante'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarTiposComprobante',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarTiposComprobanteRequest',
      type: 'consultarTiposComprobanteRequest',
      description: 'consultarTiposComprobanteRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarTiposComprobanteResponse',
      description: 'consultarTiposComprobanteResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarTiposComprobante' },
  description: 'consultarTiposComprobante'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarTiposDocumento',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarTiposDocumentoRequest',
      type: 'consultarTiposDocumentoRequest',
      description: 'consultarTiposDocumentoRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarTiposDocumentoResponse',
      description: 'consultarTiposDocumentoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarTiposDocumento' },
  description: 'consultarTiposDocumento'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarAlicuotasIVA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarAlicuotasIVARequest',
      type: 'consultarAlicuotasIVARequest',
      description: 'consultarAlicuotasIVARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarAlicuotasIVAResponse',
      description: 'consultarAlicuotasIVAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarAlicuotasIVA' },
  description: 'consultarAlicuotasIVA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarCondicionesIVA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarCondicionesIVARequest',
      type: 'consultarCondicionesIVARequest',
      description: 'consultarCondicionesIVARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarCondicionesIVAResponse',
      description: 'consultarCondicionesIVAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarCondicionesIVA' },
  description: 'consultarCondicionesIVA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarMonedas',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarMonedasRequest',
      type: 'consultarMonedasRequest',
      description: 'consultarMonedasRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarMonedasResponse',
      description: 'consultarMonedasResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarMonedas' },
  description: 'consultarMonedas'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarCotizacionMoneda',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarCotizacionMonedaRequest',
      type: 'consultarCotizacionMonedaRequest',
      description: 'consultarCotizacionMonedaRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarCotizacionMonedaResponse',
      description: 'consultarCotizacionMonedaResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarCotizacionMoneda' },
  description: 'consultarCotizacionMoneda'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarUnidadesMedida',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarUnidadesMedidaRequest',
      type: 'consultarUnidadesMedidaRequest',
      description: 'consultarUnidadesMedidaRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarUnidadesMedidaResponse',
      description: 'consultarUnidadesMedidaResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarUnidadesMedida' },
  description: 'consultarUnidadesMedida'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarPuntosVenta',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarPuntosVentaRequest',
      type: 'consultarPuntosVentaRequest',
      description: 'consultarPuntosVentaRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarPuntosVentaResponse',
      description: 'consultarPuntosVentaResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarPuntosVenta' },
  description: 'consultarPuntosVenta'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarPuntosVentaCAE',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarPuntosVentaCAERequest',
      type: 'consultarPuntosVentaCAERequest',
      description: 'consultarPuntosVentaCAERequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarPuntosVentaCAEResponse',
      description: 'consultarPuntosVentaCAEResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarPuntosVentaCAE' },
  description: 'consultarPuntosVentaCAE'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarPuntosVentaCAEA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarPuntosVentaCAEARequest',
      type: 'consultarPuntosVentaCAEARequest',
      description: 'consultarPuntosVentaCAEARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarPuntosVentaCAEAResponse',
      description: 'consultarPuntosVentaCAEAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarPuntosVentaCAEA' },
  description: 'consultarPuntosVentaCAEA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('informarCAEANoUtilizado',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'informarCAEANoUtilizadoRequest',
      type: 'informarCAEANoUtilizadoRequest',
      description: 'informarCAEANoUtilizadoRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'informarCAEANoUtilizadoResponse',
      description: 'informarCAEANoUtilizadoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/informarCAEANoUtilizado' },
  description: 'informarCAEANoUtilizado'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarTiposTributo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarTiposTributoRequest',
      type: 'consultarTiposTributoRequest',
      description: 'consultarTiposTributoRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarTiposTributoResponse',
      description: 'consultarTiposTributoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarTiposTributo' },
  description: 'consultarTiposTributo'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('informarCAEANoUtilizadoPtoVta',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'informarCAEANoUtilizadoPtoVtaRequest',
      type: 'informarCAEANoUtilizadoPtoVtaRequest',
      description: 'informarCAEANoUtilizadoPtoVtaRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'informarCAEANoUtilizadoPtoVtaResponse',
      description: 'informarCAEANoUtilizadoPtoVtaResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/informarCAEANoUtilizadoPtoVta' },
  description: 'informarCAEANoUtilizadoPtoVta'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarCAEA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarCAEARequest',
      type: 'consultarCAEARequest',
      description: 'consultarCAEARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarCAEAResponse',
      description: 'consultarCAEAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarCAEA' },
  description: 'consultarCAEA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarPtosVtaCAEANoInformados',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarPtosVtaCAEANoInformadosRequest',
      type: 'consultarPtosVtaCAEANoInformadosRequest',
      description: 'consultarPtosVtaCAEANoInformadosRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarPtosVtaCAEANoInformadosResponse',
      description: 'consultarPtosVtaCAEANoInformadosResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarPtosVtaCAEANoInformados' },
  description: 'consultarPtosVtaCAEANoInformados'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarCAEAEntreFechas',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarCAEAEntreFechasRequest',
      type: 'consultarCAEAEntreFechasRequest',
      description: 'consultarCAEAEntreFechasRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarCAEAEntreFechasResponse',
      description: 'consultarCAEAEntreFechasResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarCAEAEntreFechas' },
  description: 'consultarCAEAEntreFechas'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('autorizarAjusteIVA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'autorizarAjusteIVARequest',
      type: 'autorizarAjusteIVARequest',
      description: 'autorizarAjusteIVARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'autorizarAjusteIVAResponse',
      description: 'autorizarAjusteIVAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/autorizarAjusteIVA' },
  description: 'autorizarAjusteIVA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('informarAjusteIVACAEA',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'informarAjusteIVACAEARequest',
      type: 'informarAjusteIVACAEARequest',
      description: 'informarAjusteIVACAEARequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'informarAjusteIVACAEAResponse',
      description: 'informarAjusteIVACAEAResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/informarAjusteIVACAEA' },
  description: 'informarAjusteIVACAEA'
}
  );
  
  MTXCAServiceMTXCAServiceSoap11Binding.remoteMethod('consultarTiposDatosAdicionales',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'consultarTiposDatosAdicionalesRequest',
      type: 'consultarTiposDatosAdicionalesRequest',
      description: 'consultarTiposDatosAdicionalesRequest',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'consultarTiposDatosAdicionalesResponse',
      description: 'consultarTiposDatosAdicionalesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/consultarTiposDatosAdicionales' },
  description: 'consultarTiposDatosAdicionales'
}
  );
  
}

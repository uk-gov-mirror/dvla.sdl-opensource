package uk.gov.dvla.sml.service.config

import javax.validation.constraints.NotNull

import uk.gov.dvla.core.MongoConfiguration
import uk.gov.dvla.datastore.MongoDatastoreConfig

class TokenMongoConfig extends MongoConfiguration {

  @NotNull
  var tokenTTLSeconds: Int = _

}

object TokenMongoConfig {

  def apply(baseConfig: MongoDatastoreConfig, tokenTTLSeconds: Int): TokenMongoConfig = {
    val config = baseConfig.asInstanceOf[TokenMongoConfig]
    config.tokenTTLSeconds = tokenTTLSeconds
    config
  }

}

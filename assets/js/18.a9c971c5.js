(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{380:function(e,t,r){"use strict";r.r(t);var a=r(45),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("p",[e._v("We have developed our in-house CRD(Custom Resource Definition) to deploy and manage Redis in standalone/cluster mode. So CRD is an amazing feature of Kubernetes which allows us to create our own resources and APIs in Kubernetes. We are not going in the depth of the CRD but soon we will write a blog on CRD as well. Till that time you guys can read about CRD from the "),r("a",{attrs:{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("The API name which we have created is "),r("code",[e._v("redis.redis.opstreelabs.in/v1beta1")]),e._v(" and this operator is also published under the OperatorHub catalog.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://operatorhub.io/operator/redis-operator",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://operatorhub.io/operator/redis-operator"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("So for deploying the redis-operator and setup we need a Kubernetes cluster 1.11+ and that’s it. Let’s deploy the redis operator first.")]),e._v(" "),r("p",[e._v("The easiest way to install a redis operator is using Helm chart. The operator helm chart is developed on the "),r("code",[e._v("helm=>3.0.0")]),e._v(" version. Also, you can customize the "),r("a",{attrs:{href:"https://github.com/OT-CONTAINER-KIT/helm-charts/blob/main/charts/redis-operator/values.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("values.yaml"),r("OutboundLink")],1),e._v(" file as per the need.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("$ helm repo "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" ot-helm https://ot-container-kit.github.io/helm-charts/\n$ helm upgrade redis-operator ot-helm/redis-operator "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --install --namespace redis-operator\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nRelease "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"redis-operator"')]),e._v(" does not exist. Installing it now.\nNAME: redis-operator\nLAST DEPLOYED: Sun May  "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(":42:23 "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v("\nNAMESPACE: redis-operator\nSTATUS: deployed\nREVISION: "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nTEST SUITE: None\n")])])]),r("p",[e._v("Check the state of the pod is running or not.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("$ kubectl get pods -n redis-operator\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nNAME                              READY   STATUS    RESTARTS   AGE\nredis-operator-74b6cbf5c5-td8t7   "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1     Running   "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("          2m11s\n")])])]),r("p",[e._v("If you are beginner to Kubernetes and don't want to go inside the complexities of helm, in that case, you can use "),r("code",[e._v("kubectl")]),e._v(" to install the operator.")]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("$ kubectl apply -f https://raw.githubusercontent.com/OT-CONTAINER-KIT/redis-operator/master/config/crd/bases/redis.redis.opstreelabs.in_redis.yaml\n$ kubectl apply -f https://raw.githubusercontent.com/OT-CONTAINER-KIT/redis-operator/master/config/crd/bases/redis.redis.opstreelabs.in_redisclusters.yaml\n$ kubectl apply -f https://raw.githubusercontent.com/OT-CONTAINER-KIT/redis-operator/master/config/rbac/serviceaccount.yaml\n$ kubectl apply -f https://raw.githubusercontent.com/OT-CONTAINER-KIT/redis-operator/master/config/rbac/role.yaml\n$ kubectl apply -f https://raw.githubusercontent.com/OT-CONTAINER-KIT/redis-operator/master/config/rbac/role_binding.yaml\n$ kubectl apply -f https://raw.githubusercontent.com/OT-CONTAINER-KIT/redis-operator/master/config/manager/manager.yaml\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);